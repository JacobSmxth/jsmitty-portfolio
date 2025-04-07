'use client';

import Link from 'next/link';
import { ArrowLeft, User, Brain, Heart } from 'lucide-react';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black overflow-x-hidden">
      <main className="text-white px-4 sm:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <Link 
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-red-500 transition-colors duration-300 text-xl cursor-pointer"
            >
              <ArrowLeft className="mr-2" />
              Back to Selection
            </Link>
          </div>

          <div className="space-y-16">
            {/* Hero Section */}
            <section className="space-y-8">
              <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                About Me
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
                A journey from the football field to the world of web development.
              </p>
            </section>

            {/* Personal Journey */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <User className="text-red-500" size={28} />
                <h2 className="text-2xl sm:text-4xl font-bold text-white">My Journey</h2>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-800">
                <div className="space-y-4">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    My love for technology started early - at just 6 or 7 years old, I was creating simple text-based adventure games using batch files. This early exposure sparked a passion that would shape my future. I experimented with HTML and CSS, but when I encountered JavaScript, I found it too confusing at the time and took a step back.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I briefly explored game development, but it wasn&apos;t the right fit for me. Instead, I focused on football and excelled as a defensive end, earning offers from various colleges including NAIA, D1, D2, and D3 programs, with even some interest from Ivy League schools like Princeton. However, when the school offering the most financial support didn&apos;t align with my academic interests, I made a pivotal decision.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I chose to attend the University of North Georgia (UNG) with the HOPE scholarship, starting my first semester in person. However, I made the strategic decision to switch to online classes and work a 9-5 job to build up savings. This way, when the more advanced and important classes begin, I&apos;ll be financially prepared for the commute and potentially even living on campus.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Now, two years later, I&apos;ve found my stride in web development. My journey from creating simple batch files to building modern web applications has been a winding path, but one that&apos;s taught me valuable lessons about persistence, adaptability, and following your passion.
                  </p>
                </div>
              </div>
            </section>

            {/* Skills and Interests */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <Brain className="text-red-500" size={28} />
                <h2 className="text-2xl sm:text-4xl font-bold text-white">Skills & Interests</h2>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-800">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-red-400 mb-4">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Outside Interests */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <Heart className="text-red-500" size={28} />
                <h2 className="text-2xl sm:text-4xl font-bold text-white">Outside Interests</h2>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-800">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-red-400 mb-4">Fitness & Sports</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Weight Training', 'Football', 'Fitness', 'Sports Analysis'].map((interest) => (
                        <span key={interest} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-red-400 mb-4">Other Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Technology', 'UI/UX Design', 'Problem Solving', 'Continuous Learning'].map((interest) => (
                        <span key={interest} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 