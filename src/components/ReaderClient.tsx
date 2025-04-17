'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Calendar, Tag, 
  ChevronLeft, ChevronRight, User, Search, Lightbulb, Brain, Clock 
} from 'lucide-react';
import ReactMarkdown, { Components } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { motion } from 'framer-motion';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import { workThoughts } from '@/data/workThoughts';
import { dailyLearnings } from '@/data/learnings';
import TableOfContents from '@/components/TableOfContents';

/**
 * ReaderClient Component
 * 
 * Handles the client-side rendering and interactivity for the /reader route.
 * Manages displaying either the list of blog posts or a selected post's content.
 * Includes features like post search, category filtering, table of contents generation,
 * and display of related content (Daily Learnings, Work Thoughts).
 * Uses ReactMarkdown for rendering blog content.
 */

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Markdown components definition for styling rendered content
const markdownComponents: Components = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  h1: ({node, ...props}) => <h1 className="text-4xl sm:text-5xl font-bold text-red-500 mt-8 mb-4" {...props} />,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  h2: ({node, ...props}) => <h2 className="text-3xl sm:text-4xl font-bold text-red-500 mt-6 mb-3" {...props} />,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  h3: ({node, ...props}) => <h3 className="text-2xl sm:text-3xl font-bold text-red-500 mt-5 mb-2" {...props} />,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  p: ({node, ...props}) => <p className="text-lg text-gray-300 leading-relaxed mb-6" {...props} />,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  a: ({node, ...props}) => <a className="text-red-400 hover:text-red-500 underline" {...props} />,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-2 pl-4 mb-6" {...props} />,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ol: ({node, ...props}) => <ol className="list-decimal list-inside space-y-2 pl-4 mb-6" {...props} />,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  li: ({node, ...props}) => <li className="text-gray-300 mb-2" {...props} />,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  code({ node, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '');
    return match ? (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        className="rounded-xl border border-gray-700 text-sm my-6 w-full overflow-x-auto bg-gray-800/50 !p-4"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className="text-red-400 bg-gray-700/50 px-1 py-0.5 rounded text-sm mx-1" {...props}>
        {children}
      </code>
    );
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-400 my-6" {...props} />,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  hr: ({node, ...props}) => <hr className="border-gray-700 my-8" {...props} />,
};

interface ReaderClientProps {
  initialPost: BlogPost | null;
}

export default function ReaderClient({ initialPost }: ReaderClientProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(initialPost);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentLearningIndex, setCurrentLearningIndex] = useState(0);

  useEffect(() => {
    setSelectedPost(initialPost);
    if (initialPost) {
      window.scrollTo(0, 0);
    } 
  }, [initialPost]);

  const handlePrevLearning = () => {
    setCurrentLearningIndex((prevIndex) =>
      prevIndex === 0 ? dailyLearnings.length - 1 : prevIndex - 1
    );
  };

  const handleNextLearning = () => {
    setCurrentLearningIndex((prevIndex) =>
      prevIndex === dailyLearnings.length - 1 ? 0 : prevIndex + 1
    );
  };

  const filteredBlogPosts = blogPosts.filter(post => {
      const matchesCategory = selectedCategory ? post.tags.includes(selectedCategory) : true;
      const lowerSearchQuery = searchQuery.toLowerCase();
      const matchesSearch = searchQuery.trim() === '' ? true : 
        post.title.toLowerCase().includes(lowerSearchQuery) ||
        post.excerpt.toLowerCase().includes(lowerSearchQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowerSearchQuery));
      return matchesCategory && matchesSearch;
    });

  return (
    <main className="text-white px-4 sm:px-8 py-8 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <Link 
            href={selectedPost ? "/reader" : "/"}
            className="inline-flex items-center text-gray-400 hover:text-red-500 transition-colors duration-300 text-xl cursor-pointer"
          >
            <ArrowLeft className="mr-2" />
            {selectedPost ? 'Back to Blog List' : 'Back to Selection'}
          </Link>
          <Link 
            href="/about?from=reader"
            className="inline-flex items-center gap-2 px-6 py-2 bg-gray-800/50 text-red-400 rounded-xl hover:bg-red-500/10 transition-all duration-300 text-lg font-medium cursor-pointer"
          >
            <User size={20} />
            About Me
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-grow lg:max-w-4xl w-full space-y-16">
            {selectedPost ? (
              <article className="space-y-8">
                <header className="space-y-4">
                  <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                  </h1>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <time dateTime={selectedPost.date}>{new Date(selectedPost.date+'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{selectedPost.readingTime}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                       <Tag size={16} /> 
                      {selectedPost.tags.map((tag: string) => (
                        <span key={tag} className="px-2 py-1 bg-gray-700/50 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </header>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={fadeIn}
                >
                  <div className="max-w-none prose prose-invert prose-base lg:prose-lg">
                    <ReactMarkdown components={markdownComponents}>
                      {selectedPost.content}
                    </ReactMarkdown>
                  </div>
                </motion.div>
              </article>
            ) : (
              <>
                <motion.section 
                  className="space-y-8"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                >
                   <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                     My Thoughts & Experiences
                   </h1>
                   <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
                     Welcome where I share insights about web development, 
                     design, and my journey as a developer.
                   </p>
                </motion.section>
                {dailyLearnings.length > 0 && (
                  <motion.section 
                    className="space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                  >
                     <div className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                         <Lightbulb className="text-red-500" size={28} />
                         <h2 className="text-2xl sm:text-4xl font-bold text-white">Today I Learned</h2>
                       </div>
                       <div className="flex items-center gap-2">
                         <button onClick={handlePrevLearning} className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-300" title="Previous learning">
                           <ChevronLeft className="text-gray-400 hover:text-red-500" size={24} />
                         </button>
                         <span className="text-gray-400 text-sm">
                           {currentLearningIndex + 1} / {dailyLearnings.length}
                         </span>
                         <button onClick={handleNextLearning} className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-300" title="Next learning">
                           <ChevronRight className="text-gray-400 hover:text-red-500" size={24} />
                         </button>
                       </div>
                     </div>
                     <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-800">
                       <div className="space-y-4">
                         <div className="flex items-center justify-between">
                           <h3 className="text-xl font-semibold text-red-400">{dailyLearnings[currentLearningIndex].title}</h3>
                           <time className="text-sm text-gray-400">
                             {new Date(dailyLearnings[currentLearningIndex].date + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                           </time>
                         </div>
                         <p className="text-gray-300 text-lg leading-relaxed">
                           {dailyLearnings[currentLearningIndex].description}
                         </p>
                         <div className="flex flex-wrap gap-2">
                           {dailyLearnings[currentLearningIndex].tags.map((tag: string) => (
                             <span key={tag} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">{tag}</span>
                           ))}
                         </div>
                       </div>
                     </div>
                  </motion.section>
                )}
                <motion.section 
                  className="space-y-8 w-full"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeIn}
                >
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Search className="text-gray-400" size={20} />
                    </div>
                    <input type="text" placeholder="Search posts..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors duration-300"/>
                  </div>
                  <div className="space-y-6">
                     <div className="flex items-center gap-3">
                       <Tag className="text-red-500" size={28} />
                       <h2 className="text-2xl sm:text-4xl font-bold text-white">Categories</h2>
                     </div>
                     <div className="flex flex-wrap gap-4">
                       <button onClick={() => setSelectedCategory(null)} className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300 cursor-pointer ${!selectedCategory ? 'bg-red-500 text-white' : 'bg-gray-800/50 text-gray-300 hover:bg-red-500/10 hover:text-red-400'}`}>
                         All
                       </button>
                       {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag) => (
                         <button key={tag} onClick={() => setSelectedCategory(tag)} className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300 cursor-pointer ${selectedCategory === tag ? 'bg-red-500 text-white' : 'bg-gray-800/50 text-gray-300 hover:bg-red-500/10 hover:text-red-400'}`}>
                           {tag}
                         </button>
                       ))}
                     </div>
                   </div>
                </motion.section>
                <motion.section 
                  className="space-y-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={fadeIn}
                >
                  {filteredBlogPosts.length > 0 ? (
                    <>
                      <div className="space-y-8"> 
                        {filteredBlogPosts
                          .slice((currentPage - 1) * 5, currentPage * 5)
                          .map((post, index) => (
                            <motion.article 
                              key={post.id} 
                              className="bg-gray-800/30 rounded-xl p-6 sm:p-8 space-y-4 border border-gray-800 shadow-sm"
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.2 }}
                              variants={fadeIn}
                              custom={index}
                              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                            >
                              <header className="space-y-3">
                                <h2 className="text-2xl sm:text-3xl font-bold text-red-400 hover:text-red-500 transition-colors"><Link href={`/reader?post=${post.id}`}>{post.title}</Link></h2>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-400 text-sm">
                                  <div className="flex items-center gap-1.5">
                                    <Calendar size={14} />
                                    <time dateTime={post.date}>{new Date(post.date+'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <Clock size={14} />
                                    <span>{post.readingTime}</span>
                                  </div>
                                  <div className="flex flex-wrap items-center gap-1.5">
                                     <Tag size={14} /> 
                                    {post.tags.map((tag) => (
                                      <span key={tag} className="px-2 py-0.5 bg-gray-700/50 rounded-full text-xs">{tag}</span>
                                    ))}
                                  </div>
                                </div>
                              </header>
                              <p className="text-gray-300 text-base leading-relaxed">{post.excerpt}</p>
                              <div className="flex justify-end">
                                <Link href={`/reader?post=${post.id}`} className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-500 transition-colors font-medium">
                                  Read More
                                  <ChevronRight size={18} />
                                </Link>
                              </div>
                            </motion.article>
                          ))}
                      </div>
                      {Math.ceil(filteredBlogPosts.length / 5) > 1 && (
                        <div className="flex items-center justify-center gap-4 pt-4">
                           <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed" title="Previous page">
                             <ChevronLeft className="text-gray-400 hover:text-red-500" size={24} />
                           </button>
                           <span className="text-gray-400">
                             Page {currentPage} of {Math.ceil(filteredBlogPosts.length / 5)}
                           </span>
                           <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredBlogPosts.length / 5)))} disabled={currentPage === Math.ceil(filteredBlogPosts.length / 5)} className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed" title="Next page">
                             <ChevronRight className="text-gray-400 hover:text-red-500" size={24} />
                           </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-400 text-lg">No posts found matching your search criteria.</p>
                    </div>
                  )}
                </motion.section>
              </>
            )}
          </div>

          <aside className="lg:w-96 w-full space-y-8 flex-shrink-0">
            {selectedPost && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <TableOfContents content={selectedPost.content} />
              </motion.div>
            )}

            {!selectedPost && (
              <>
                {workThoughts.length > 0 && (
                  <motion.div 
                    className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-800"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                  >
                    <div className="flex items-center gap-3 mb-6">
                       <Brain className="text-red-500" size={28} />
                       <h2 className="text-2xl font-bold text-white">Work Thoughts</h2>
                    </div>
                    <ul className="space-y-4">
                      {workThoughts.map((thought) => (
                        <li key={String(thought.id)} className="border-b border-gray-700 pb-3 last:border-b-0">
                          <p className="text-gray-300 mb-1">{thought.thought}</p>
                          <time className="text-xs text-gray-500">{new Date(thought.date).toLocaleDateString()}</time>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
} 