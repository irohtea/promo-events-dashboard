// components/DraggableBlock.tsx
'use client'

import { useDrag, useDrop } from 'react-dnd'
import { Input } from '@/components/ui/input'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { BoldIcon, DeleteIcon, ItalicIcon, UnderlineIcon } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'

export default function DraggableBlock({ block, index, moveBlock, updateContent, deleteBlock  }: any) {
  const ref = useRef(null)

  const [, drop] = useDrop({
    accept: 'BLOCK',
    hover(item: any) {
      if (item.index !== index) {
        moveBlock(item.index, index)
        item.index = index
      }
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: 'BLOCK',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))
   const formatText = (tag: string) => {
      const textarea = ref.current?.querySelector("textarea");
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const before = block.content.slice(0, start);
      const selected = block.content.slice(start, end);
      const after = block.content.slice(end);

      const wrapped = `<${tag}>${selected}</${tag}>`;
      const updated = before + wrapped + after;

      updateContent(index, updated);
   };
   return (
    <div
      ref={ref}
      className={`p-4 mb-2 border bg-white rounded shadow relative ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <strong>{block.type.toUpperCase()}</strong>

   {block.content !== null && (block.type === "text" || block.type === "list" ? (
         <div className="flex flex-col gap-2">
            <div className='flex gap-2 '>
               <Button type='button' size={'icon'} onClick={() => formatText("strong")}><BoldIcon /></Button>
               <Button type='button' size={'icon'} onClick={() => formatText("em")}><ItalicIcon /></Button>
               <Button type='button' size={'icon'} onClick={() => formatText("u")}><UnderlineIcon /></Button>
            </div>
         <Textarea
            className="w-full mt-1 p-2 border rounded"
            rows={4}
            value={block.content}
            onChange={(e) => updateContent(index, e.target.value)}
         />
         </div>
      ) : (
         <Input
            className="mt-1"
            value={block.content}
            onChange={(e) => updateContent(index, e.target.value)}
         />
      )
   )}
      <Button
        onClick={() => deleteBlock(index)}
        className="absolute top-1 right-1 "
        aria-label="Delete block"
        variant={'destructive'}
        size={'icon'}
        type='button'
      >
        <DeleteIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
