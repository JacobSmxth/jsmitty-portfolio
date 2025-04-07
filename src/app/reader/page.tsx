'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpen, Calendar, Tag, MessageCircle, ThumbsUp, ChevronLeft, ChevronRight, User, Search, Clock, Lightbulb, Brain } from 'lucide-react';
import Footer from '@/components/Footer';
import { fetchRedditPosts } from '@/lib/reddit';
import { useEffect, useState } from 'react';
import { RedditPost } from '@/types/reddit';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { blogPosts } from '@/data/blogPosts';
import TableOfContents from '@/components/TableOfContents';
import { dailyLearnings } from '@/data/learnings';
import { workThoughts } from '@/data/workThoughts';

export default function ReaderPage() {
  const [posts, setPosts] = useState<RedditPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentLearningIndex, setCurrentLearningIndex] = useState(0);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const { posts: newPosts, hasMore: morePosts } = await fetchRedditPosts('ImpossibleVirus8112', currentPage);
        setPosts(newPosts);
        setHasMore(morePosts);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [currentPage]);

  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  };

  const filteredBlogPosts = blogPosts
    .filter(post => {
      const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
      const matchesSearch = searchQuery.trim() === '' ? true : 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const handlePrevLearning = () => {
    setCurrentLearningIndex(prev => 
      prev > 0 ? prev - 1 : dailyLearnings.length - 1
    );
  };

  const handleNextLearning = () => {
    setCurrentLearningIndex(prev => 
      prev < dailyLearnings.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black overflow-x-hidden">
      <main className="text-white px-4 sm:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <Link 
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-red-500 transition-colors duration-300 text-xl cursor-pointer"
            >
              <ArrowLeft className="mr-2" />
              Back to Selection
            </Link>

            <Link 
              href="/about?from=reader"
              className="inline-flex items-center gap-2 px-6 py-2 bg-gray-800/50 text-red-400 rounded-xl hover:bg-red-500/10 transition-all duration-300 text-lg font-medium cursor-pointer"
            >
              <User size={20} />
              About Me
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-grow lg:max-w-4xl w-full space-y-16">
              {/* Hero Section */}
              <section className="space-y-8">
                <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                  My Thoughts & Experiences
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
                  Welcome to my blog where I share insights about web development, 
                  design, and my journey as a developer.
                </p>
              </section>

              {/* Today I Learned - Latest */}
              {dailyLearnings.length > 0 && (
                <section className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="text-red-500" size={28} />
                      <h2 className="text-2xl sm:text-4xl font-bold text-white">Today I Learned</h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrevLearning}
                        className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                        title="Previous learning"
                      >
                        <ChevronLeft className="text-gray-400 hover:text-red-500" size={24} />
                      </button>
                      <span className="text-gray-400 text-sm">
                        {currentLearningIndex + 1} / {dailyLearnings.length}
                      </span>
                      <button
                        onClick={handleNextLearning}
                        className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-300"
                        title="Next learning"
                      >
                        <ChevronRight className="text-gray-400 hover:text-red-500" size={24} />
                      </button>
                    </div>
                  </div>
                  <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-red-400">{dailyLearnings[currentLearningIndex].title}</h3>
                        <time className="text-sm text-gray-400">
                          {new Date(dailyLearnings[currentLearningIndex].date + 'T00:00:00').toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {dailyLearnings[currentLearningIndex].description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {dailyLearnings[currentLearningIndex].tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Search and Categories */}
              <section className="space-y-8 w-full">
                {/* Search */}
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="text-gray-400" size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors duration-300"
                  />
                </div>

                {/* Categories */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Tag className="text-red-500" size={28} />
                    <h2 className="text-2xl sm:text-4xl font-bold text-white">Categories</h2>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => setSelectedCategory(null)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300 cursor-pointer
                        ${!selectedCategory ? 'bg-red-500 text-white' : 'bg-gray-800/50 text-gray-300 hover:bg-red-500/10 hover:text-red-400'}`}
                    >
                      All
                    </button>
                    {['Web Development', 'Design', 'Tutorials', 'Personal'].map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300 cursor-pointer
                          ${selectedCategory === category ? 'bg-red-500 text-white' : 'bg-gray-800/50 text-gray-300 hover:bg-red-500/10 hover:text-red-400'}`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </section>

              {/* Blog Posts */}
              <section className="space-y-8">
                {filteredBlogPosts.length > 0 ? (
                  filteredBlogPosts.map((post) => (
                    <article key={post.id} className="bg-gray-800/30 rounded-xl p-4 sm:p-8 space-y-6 border border-gray-800">
                      <header className="space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-red-400">{post.title}</h2>
                        <div className="flex flex-wrap items-center gap-4 text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <time>{new Date(post.date).toLocaleDateString()}</time>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{calculateReadingTime(post.content)} min read</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <span key={tag} className="px-2 py-1 bg-gray-700/50 rounded-full text-sm">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </header>
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="prose prose-invert max-w-none overflow-x-auto">
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          components={{
                            p: (props) => <p className="text-gray-300" {...props} />,
                            h1: (props) => <h1 className="text-2xl sm:text-3xl font-bold text-red-400" {...props} />,
                            h2: (props) => <h2 className="text-xl sm:text-2xl font-bold text-red-400" {...props} />,
                            h3: (props) => <h3 className="text-lg sm:text-xl font-bold text-red-400" {...props} />,
                            a: (props) => <a className="text-red-400 hover:text-red-500" {...props} />,
                            code: (props) => <code className="bg-gray-700 px-1 py-0.5 rounded break-words" {...props} />,
                            pre: (props) => <pre className="bg-gray-700 p-4 rounded-lg overflow-x-auto" {...props} />,
                            blockquote: (props) => <blockquote className="border-l-4 border-red-500 pl-4 italic" {...props} />,
                            ul: (props) => <ul className="list-disc pl-6" {...props} />,
                            ol: (props) => <ol className="list-decimal pl-6" {...props} />,
                            li: (props) => <li className="text-gray-300" {...props} />,
                            img: (props) => (
                              <img
                                {...props}
                                className="max-w-full h-auto rounded-lg"
                                alt={props.alt || ''}
                              />
                            ),
                          }}
                        >
                          {post.content}
                        </ReactMarkdown>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="text-center py-12 bg-gray-800/30 rounded-xl border border-gray-800">
                    <p className="text-gray-400 text-lg">No posts found matching your criteria.</p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory(null);
                      }}
                      className="mt-4 text-red-400 hover:text-red-500 transition-colors duration-300"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-96 w-full space-y-8">
              {/* Table of Contents for current post */}
              {filteredBlogPosts.length === 1 && (
                <TableOfContents content={filteredBlogPosts[0].content} />
              )}

              {/* Reddit Posts */}
              <div className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="text-red-500" size={24} />
                  <h2 className="text-2xl font-bold text-white">Recent Reddit Posts</h2>
                </div>
                {loading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500 mx-auto"></div>
                    <p className="mt-4 text-gray-400">Loading posts...</p>
                  </div>
                ) : posts.length > 0 ? (
                  <div className="space-y-6">
                    {posts.map((post) => (
                      <div key={post.id} className="space-y-2 pb-4 border-b border-gray-700 last:border-0 last:pb-0">
                        <h3 className="text-lg font-semibold text-red-400">{post.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <ThumbsUp size={14} />
                            <span>{post.score}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle size={14} />
                            <span>{post.numComments}</span>
                          </div>
                        </div>
                        <a 
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm"
                        >
                          Read on Reddit →
                        </a>
                      </div>
                    ))}
                    {/* Pagination Controls */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                      <button
                        onClick={() => currentPage > 1 && setCurrentPage(prev => prev - 1)}
                        disabled={currentPage === 1}
                        className={`text-sm ${
                          currentPage === 1
                            ? 'text-gray-500 cursor-not-allowed'
                            : 'text-gray-400 hover:text-red-500'
                        }`}
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => hasMore && setCurrentPage(prev => prev + 1)}
                        disabled={!hasMore}
                        className={`text-sm ${
                          !hasMore
                            ? 'text-gray-500 cursor-not-allowed'
                            : 'text-gray-400 hover:text-red-500'
                        }`}
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-400 text-center py-8">No posts found.</p>
                )}
              </div>

              {/* Work Thoughts */}
              {workThoughts.length > 0 && (
                <div className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-800">
                  <div className="flex items-center gap-3 mb-6">
                    <Brain className="text-red-500" size={24} />
                    <h2 className="text-2xl font-bold text-white">Work Thoughts</h2>
                  </div>
                  <div className="space-y-6">
                    {workThoughts.map((thought) => (
                      <div key={thought.id} className="space-y-2 pb-4 border-b border-gray-700 last:border-0 last:pb-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-red-400">{thought.title}</h3>
                          <time className="text-sm text-gray-400">
                            {new Date(thought.date + 'T00:00:00').toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {thought.thought}
                        </p>
                        <div className="flex items-center gap-2">
                          <span 
                            className={`px-2 py-1 rounded-full text-xs ${
                              thought.mood === 'positive' 
                                ? 'bg-green-500/20 text-green-400' 
                                : thought.mood === 'challenging'
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : 'bg-gray-500/20 text-gray-400'
                            }`}
                          >
                            {thought.mood}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 