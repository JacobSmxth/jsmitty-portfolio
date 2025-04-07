'use client';

import { List } from 'lucide-react';

interface Heading {
  text: string;
  level: number;
  id: string;
}

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  // Extract headings from markdown content
  const headings: Heading[] = content
    .split('\n')
    .filter(line => line.startsWith('#'))
    .map(line => {
      const level = line.match(/^#+/)?.[0].length || 0;
      const text = line.replace(/^#+\s+/, '');
      const id = text.toLowerCase().replace(/[^\w]+/g, '-');
      return { text, level, id };
    });

  if (headings.length === 0) return null;

  return (
    <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-800 sticky top-8">
      <div className="flex items-center gap-3 mb-4">
        <List className="text-red-500" size={24} />
        <h3 className="text-xl font-bold text-white">Table of Contents</h3>
      </div>
      <nav className="space-y-2">
        {headings.map((heading, index) => (
          <a
            key={index}
            href={`#${heading.id}`}
            className={`block text-gray-400 hover:text-red-500 transition-colors duration-300 ${
              heading.level === 1 ? 'font-semibold' : ''
            }`}
            style={{ paddingLeft: `${(heading.level - 1) * 1}rem` }}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
} 