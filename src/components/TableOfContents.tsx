'use client';

import { List } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Heading {
  text: string;
  level: number;
  id: string;
}

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  // Extract headings from markdown content
  const headings: Heading[] = content
    .split('\n')
    .filter(line => line.startsWith('#'))
    .map(line => {
      const level = line.match(/^#+/)?.[0].length || 0;
      const text = line.replace(/^#+\s+/, '').trim();
      const id = text.toLowerCase().replace(/[^\w]+/g, '-');
      return { text, level, id };
    });

  useEffect(() => {
    // Add IDs to the actual headings in the document
    headings.forEach(({ id, text }) => {
      const heading = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
        .find(el => el.textContent === text);
      if (heading) {
        heading.id = id;
      }
    });

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    // Observe all headings
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Adjust based on your layout
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

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
            onClick={(e) => handleClick(e, heading.id)}
            className={`block transition-all duration-300 ${
              activeId === heading.id 
                ? 'text-red-500 translate-x-2'
                : 'text-gray-400 hover:text-red-500 hover:translate-x-1'
            } ${
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