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
    <div className="markdown-viewer bg-white rounded-lg p-4 sm:p-6 md:p-8 border border-gray-200 max-h-[70vh] sm:max-h-[800px] overflow-y-auto modal-scrollbar">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          pre: ({ node, ...props }) => (
            <pre className="overflow-x-auto text-xs sm:text-sm" {...props} />
          ),
          code: ({ node, ...props }) => (
            <code className="text-xs sm:text-sm break-words" {...props} />
          ),
          img: ({ node, ...props }) => (
            <img className="max-w-full h-auto" {...props} />
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs sm:text-sm" {...props} />
            </div>
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
