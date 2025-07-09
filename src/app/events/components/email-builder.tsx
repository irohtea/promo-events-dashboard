"use client";

import { ChevronDownIcon } from "lucide-react"
import { Label } from "@radix-ui/react-label";
import EmailPreviewRenderer from "./email-preview-render";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableBlock from "./draggebleBlock";

export default function EmailBuilder() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [emailTime, setEmailTime] = useState("12:00");
  const [emailContent, setEmailContent] = useState<any[]>([]);

  const addBlock = (type: string) => {
    const newBlock = {
      id: Date.now(),
      type,
      content: type === "text" || type === "heading" ? "Editable content" : null,
    };
    setEmailContent([...emailContent, newBlock]);
  };

  const deleteBlock = (index: number) => {
    const updatedBlocks = [...emailContent];
    updatedBlocks.splice(index, 1);
    setEmailContent(updatedBlocks);
  };

  const moveBlock = (fromIndex: number, toIndex: number) => {
    const updatedBlocks = [...emailContent];
    const [moved] = updatedBlocks.splice(fromIndex, 1);
    updatedBlocks.splice(toIndex, 0, moved);
    setEmailContent(updatedBlocks);
  };

  const updateBlockContent = (index: number, newContent: string) => {
    const updatedBlocks = [...emailContent];
    updatedBlocks[index].content = newContent;
    setEmailContent(updatedBlocks);
  };
  
  useEffect(() => {
    if (date && emailTime) {
      const [hours, minutes] = emailTime.split(":").map(Number);
      const updatedDate = new Date(date);
      updatedDate.setHours(hours, minutes, 0, 0); 
      setDate(updatedDate);
    }
  }, [date, emailTime]);

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <div className="flex flex-col gap-3">
          <Label>
            Date
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-40 justify-between font-normal"
              >
                {date ? date.toLocaleDateString() : "Select date"}
                <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                onSelect={(d) => {
                  setDate(d)
                  setOpen(false)
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-col gap-3">
          <Label className="px-1">
            End Time
          </Label>
          <Input
            type="time"
            step="60"
            value={emailTime}
            onChange={(e) => setEmailTime(e.target.value)}
            className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
          />
        </div>
      </div>
      <div className="flex gap-4 flex-wrap">
        <div className="flex gap-2 justify-center items-center p-4 bg-gray-100 rounded">
          <Button type="button" onClick={() => addBlock("heading")}>Add Heading</Button>
          <Button type="button" onClick={() => addBlock("text")}>Add Text</Button>
          <Button type="button" onClick={() => addBlock("divider")}>Add Divider</Button>
          {/* <Button type="button" onClick={() => addBlock("list")}>Add List</Button> */}
          {/* <Button type="button" onClick={() => addBlock("section")}>Add Section</Button> */}
        </div>
        <DndProvider  backend={HTML5Backend}>
          <div className="flex-1/2 mt-4">
            {emailContent.map((block, index) => (
              <DraggableBlock
                key={block.id}
                block={block}
                index={index}
                moveBlock={moveBlock}
                updateContent={updateBlockContent}
                deleteBlock={deleteBlock}
              />
            ))}
          </div>
        </DndProvider>
      </div>
        <EmailPreviewRenderer blocks={emailContent} />
    </div>
  )
}
