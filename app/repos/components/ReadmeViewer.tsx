'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'

interface ReadmeViewerProps {
  content: string
}

export function ReadmeViewer({ content }: ReadmeViewerProps) {
  return (
    <div className="markdown-viewer bg-white rounded-md p-8 border border-gray-200 max-h-[800px] overflow-y-auto modal-scrollbar">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

