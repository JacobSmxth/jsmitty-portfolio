'use client';

import React, { useState, useEffect, useRef } from 'react';

/**
 * TableOfContents Component
 * 
 * Dynamically generates a table of contents based on the headings (h1, h2, h3)
 * found within the provided markdown content string.
 * Uses IntersectionObserver to automatically highlight the currently visible section
 * in the viewport as the user scrolls.
 */

interface Heading {
  text: string;
  level: number;
  id: string;
}

interface TableOfContentsProps {
  content: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const headingElementsRef = useRef<{ [key: string]: HTMLElement }>({});

  useEffect(() => {
    // Extract headings from markdown content
    const headingLines = content.match(/^#+ .*/gm) || [];
    const extractedHeadings = headingLines.map((line) => {
      const level = line.match(/^#+/)?.[0].length || 0;
      const text = line.replace(/^#+ /, '');
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
      return { id, text, level };
    }).filter(h => h.level >= 1 && h.level <= 3); // Only include h1, h2, h3

    setHeadings(extractedHeadings);

    // Add IDs to the actual headings in the document
    // This relies on the markdown being rendered elsewhere with matching logic
    extractedHeadings.forEach(heading => {
      const elements = document.querySelectorAll(`h${heading.level}`);
      elements.forEach(el => {
        if (el.textContent?.trim() === heading.text) {
          el.id = heading.id;
        }
      });
    });

    // Intersection Observer for active heading
    const yOffset = -80; // Offset to trigger highlight slightly before element reaches top
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          setActiveId(id);
          headingElementsRef.current[id] = entry.target as HTMLElement;
        } else {
          // Handle scrolling up: Check if the element is above the viewport
          const diff = entry.boundingClientRect.y - entry.rootBounds!.y;
          if (diff < 0) {
            // Scrolling up, find the previous heading
            const visibleHeadings = Object.keys(headingElementsRef.current);
            const currentIdx = visibleHeadings.findIndex(key => key === id);
            if (currentIdx > 0) {
              setActiveId(visibleHeadings[currentIdx - 1]);
            }
          }
        }
      });
    }, { rootMargin: `${yOffset}px 0px -50% 0px` }); // Adjust rootMargin as needed

    // Observe all headings
    const headingEls = document.querySelectorAll('h1[id], h2[id], h3[id]');
    headingEls.forEach(el => observer.current?.observe(el));

    return () => {
      observer.current?.disconnect();
      headingElementsRef.current = {};
    };
  }, [content]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // Match observer offset or desired scroll position
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (headings.length === 0) {
    return null; // Don't render if no headings found
  }

  return (
    <div className="sticky top-24 space-y-4 bg-gray-800/30 p-6 rounded-xl border border-gray-700">
      <h3 className="text-lg font-semibold text-red-400 border-b border-gray-600 pb-2">On this page</h3>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id} className={`text-sm ${heading.level === 2 ? 'pl-4' : heading.level === 3 ? 'pl-8' : ''}`}>
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={`hover:text-red-500 transition-colors duration-200 text-left ${activeId === heading.id ? 'text-red-500 font-medium' : 'text-gray-300'}`}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents; 