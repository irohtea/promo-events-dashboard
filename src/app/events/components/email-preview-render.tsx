'use client'

import { useEffect, useState } from 'react'
import { render } from '@react-email/render'
import EmailPreview from './email-preview'

export default function EmailPreviewRenderer({ blocks }: { blocks: any[] }) {
  const [html, setHtml] = useState('')

  useEffect(() => {
    async function generateHtml() {
      const rendered = await render(<EmailPreview blocks={blocks} />, { pretty: true })
      setHtml(rendered)
    }
    generateHtml()
  }, [blocks]) 
  const openInNewTab = () => {
   //  const fullHtml = html
    const newWindow = window.open('', '_blank')
    if (newWindow) {
      newWindow.document.open()
      newWindow.document.write(html)
      newWindow.document.close()
    }
  }

  return (
    <div className="">
      <div>
        <button
          onClick={openInNewTab}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Open Preview in New Tab
        </button>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Rendered Preview</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
