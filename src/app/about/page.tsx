'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, User, Heart, Film, X } from 'lucide-react';

/**
 * About Page Component (/about)
 * 
 * Displays personal background, journey into web development, outside interests,
 * and media consumption (like Spider-Man).
 * Includes an interactive modal triggered by double-clicking the portrait image.
 */

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageDoubleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black overflow-x-hidden">
      <main className="text-white px-4 sm:px-6 md:px-8 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <Link 
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-red-500 transition-colors duration-300 text-lg sm:text-xl cursor-pointer"
            >
              <ArrowLeft className="mr-2" />
              Back to Selection
            </Link>
          </div>

          <div className="space-y-12 md:space-y-16">
            {/* Hero Section */}
            <section className="space-y-6 md:space-y-8">
              <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                <div className="flex-1 space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                    About Me
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
                    A journey from the football field to web development.
                  </p>
                </div>
                <div className="relative w-40 h-48 sm:w-56 sm:h-64 md:w-64 md:h-72 cursor-pointer" title="Double-click for a surprise!">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-gray-100 to-gray-200 shadow-lg" />
                  <Image
                    src="/images/Me2.png"
                    alt="Portrait of Jacob"
                    fill
                    className="object-cover object-top rounded-full border-4 border-red-500/20 relative z-10 hover:scale-105 transition-transform duration-300"
                    priority
                    onDoubleClick={handleImageDoubleClick}
                  />
                </div>
              </div>
            </section>

            {/* Personal Journey */}
            <section className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <User className="text-red-500" size={24} />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">My Journey</h2>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-800">
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    My love for technology started early - at just 6 or 7 years old, I was creating simple text-based adventure games using batch files. This early exposure sparked a passion that would shape my future. I experimented with HTML and CSS, but when I encountered JavaScript, I found it too confusing at the time and took a step back.
                  </p>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    I briefly explored game development, but it wasn&apos;t the right fit for me. Instead, I focused on football and excelled as a defensive end, earning offers from various colleges including NAIA, D1, D2, and D3 programs, with even some interest from Ivy League schools like Princeton. However, when the school offering the most financial support didn&apos;t align with my academic interests, I made a pivotal decision to chart my own path.
                  </p>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    I chose to attend the University of North Georgia (UNG) with the HOPE scholarship, starting my first semester in person. However, I made the strategic decision to switch to online classes and work a 9-5 job to build up savings. This way, when the more advanced and important classes begin, I&apos;ll be financially prepared for the commute and potentially even living on campus.
                  </p>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Now, two years later, I&apos;ve found my stride in web development. My journey from creating simple batch files to building modern web applications has been a winding path, but one that&apos;s taught me valuable lessons about persistence, adaptability, and following your passion.
                  </p>
                </div>
              </div>
            </section>

            {/* Outside Interests */}
            <section className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <Heart className="text-red-500" size={24} />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Outside Interests</h2>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-800">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-red-400 mb-3">Fitness & Sports</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Weight Training', 'Football', 'Fitness', 'Sports Analysis'].map((interest) => (
                        <span key={interest} className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-sm">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-red-400 mb-3">Other Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Technology', 'UI/UX Design', 'Problem Solving', 'Continuous Learning'].map((interest) => (
                        <span key={interest} className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-sm">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Entertainment & Media */}
            <section className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <Film className="text-red-500" size={24} />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Entertainment & Media</h2>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-800">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-red-400 mb-3">Spider-Man Fan</h3>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
                      As a lifelong Spider-Man enthusiast, I&apos;ve found inspiration in the character&apos;s journey of growth and responsibility. While I appreciate Tobey Maguire&apos;s nostalgic portrayal, I believe Andrew Garfield truly captured the essence of the character, even if the writing didn&apos;t always do him justice. The upcoming &quot;Friendly Neighborhood Spider-Man&quot; show promises to bring an exciting new perspective to the character.
                    </p>
                    <Link 
                      href="/reader?post=web-of-inspiration"
                      className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors duration-300"
                    >
                      Read my thoughts on Spider-Man and Development →
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Secret Modal */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" 
            onClick={closeModal}
          >
            <div 
              className="relative bg-black border border-red-500/30 p-6 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeModal} 
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <div className="space-y-4">
                <Image 
                  src="/images/favorite.png" 
                  alt="Favorite Image - Ceci" 
                  width={500}
                  height={500}
                  className="object-contain w-full h-auto rounded"
                />
                <div className="text-center text-gray-200 space-y-2">
                  <p className="text-lg font-semibold text-red-400">This is my girlfriend, Ceci!</p>
                  <p>We met freshman year of high school in the lunch courtyard.</p>
                  <p>We started dating junior year and even won Hoco King and Queen together.</p>
                  <p>Unfortunately, we&apos;re doing long distance now, but making it work!</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
} 