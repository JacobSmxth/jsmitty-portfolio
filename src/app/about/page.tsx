'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, User, Heart, Film, X, 
  Code, GraduationCap, Github, Linkedin, Twitter 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { skills } from '@/data/skills';
import { timeline } from '@/data/timeline';

/**
 * About Page Component (/about)
 * 
 * Displays personal background, journey into web development, outside interests,
 * and media consumption (like Spider-Man).
 * Includes an interactive modal triggered by double-clicking the portrait image.
 */

// Create a custom motion component with proper types
interface AnimatedDialogPanelProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedDialogPanel = ({ children, className }: AnimatedDialogPanelProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 300
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Add this near the top with other component definitions
const EasterEggPanel = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 300
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleImageDoubleClick = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
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
            <motion.section 
              className="space-y-6 md:space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                <div className="flex-1 space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                    About Me
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
                    A journey from the football field to web development.
                  </p>
                  <div className="flex gap-4 pt-4">
                    <a href="https://github.com/jacobsmxth" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                      <Github size={24} />
                    </a>
                    <a href="https://linkedin.com/in/jacobsmxth" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                      <Linkedin size={24} />
                    </a>
                    <a href="https://twitter.com/jacobsmxth" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                      <Twitter size={24} />
                    </a>
                  </div>
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
            </motion.section>

            {/* Skills Section */}
            <motion.section 
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3">
                <Code className="text-red-500" size={24} />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Skills</h2>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-800">
                <p className="text-sm text-gray-400 mb-4 italic">
                  * Percentages represent my confidence level in each skill, not an objective measure of expertise.
                </p>
                <div className="space-y-6">
                  {[...skills]
                    .sort((a, b) => b.level - a.level)
                    .slice(0, 6)
                    .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-red-500 to-red-800"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setIsOpen(true)}
                  className="mt-6 text-red-400 hover:text-red-300 transition-colors duration-300 text-sm"
                >
                  See More Skills ↓
                </button>
              </div>
            </motion.section>

            {/* Skills Dialog */}
            <Dialog
              open={isOpen}
              onClose={() => setIsOpen(false)}
              className="relative z-50"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                aria-hidden="true"
              />
              <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel 
                  as={AnimatedDialogPanel}
                  className="mx-auto max-w-2xl w-full bg-gray-900 rounded-xl border border-gray-800 p-6 max-h-[90vh] flex flex-col"
                >
                  <div className="flex justify-between items-center mb-6">
                    <Dialog.Title className="text-2xl font-bold text-white">All Skills</Dialog.Title>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsOpen(false)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X size={24} />
                    </motion.button>
                  </div>
                  <div className="overflow-y-auto custom-scrollbar pr-2">
                    <div className="space-y-6">
                      {[...skills]
                        .sort((a, b) => b.level - a.level)
                        .map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            delay: index * 0.05,
                            duration: 0.3
                          }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between">
                            <span className="text-gray-300">{skill.name}</span>
                            <span className="text-gray-400">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-red-500 to-red-800"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ 
                                duration: 1, 
                                delay: 0.3 + index * 0.05,
                                type: "spring",
                                damping: 20,
                                stiffness: 100
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </Dialog>

            {/* Timeline Section */}
            <motion.section 
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <GraduationCap className="text-red-500" size={24} />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Timeline</h2>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-800">
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={`${item.year}-${item.title}`}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                          <span className="text-red-400 font-semibold">{item.year}</span>
                        </div>
                        {index !== timeline.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-700" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-red-400">{item.title}</h3>
                        <p className="text-gray-300 mt-1">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Personal Journey */}
            <motion.section 
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
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
            </motion.section>

            {/* Outside Interests */}
            <motion.section 
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
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
            </motion.section>

            {/* Entertainment & Media */}
            <motion.section 
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
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
            </motion.section>
          </div>
        </div>

        {/* Secret Modal */}
        <Dialog
          open={isModalOpen}
          onClose={closeModal}
          className="relative z-[100]"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel
              as={EasterEggPanel}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] w-fit max-w-[90vw] max-h-[90vh] overflow-auto custom-scrollbar"
            >
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={closeModal} 
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors z-10 p-2 rounded-full hover:bg-white/10"
                aria-label="Close modal"
              >
                <X size={24} />
              </motion.button>
              <div className="space-y-6">
                <div className="relative w-[500px] h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 p-1 backdrop-blur-sm">
                  <Image 
                    src="/images/favorite.png" 
                    alt="Favorite Image - Ceci" 
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                </div>
                <div className="text-center space-y-4 px-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Meet Ceci - My Amazing Girlfriend! 💖</h3>
                    <div className="w-20 h-1 mx-auto bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0 rounded-full" />
                  </div>
                  <div className="space-y-3 text-gray-300 text-base max-w-md mx-auto">
                    <p className="leading-relaxed">Our story began in the lunch courtyard freshman year, where a simple conversation turned into something special.</p>
                    <p className="leading-relaxed">Junior year brought us together officially, and we even had the honor of being crowned Homecoming King and Queen - a memory we&apos;ll cherish forever!</p>
                    <p className="leading-relaxed">Though we&apos;re currently navigating a long-distance relationship, our connection remains strong. Every challenge we face only makes our bond stronger.</p>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </main>
    </div>
  );
} 