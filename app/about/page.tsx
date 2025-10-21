'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, X } from 'lucide-react'

export default function About() {
  const [showFullStory, setShowFullStory] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  const summary = `I'm a Cybersecurity + CS student at University of North Georgia, focused on backend development and security.

Started coding at 6 with batch scripts, got into web development, then played football from 2nd grade through senior year where I was recruited by multiple colleges as a Defensive End.

After football, I came back to programming. Now I'm building projects with Java and Spring Boot, learning to ship secure, performant systems.

Currently learning: Backend security, distributed systems, and performance optimization`

  return (
    <div className="min-h-screen pt-40 px-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent text-center"
        >
          About Me
        </motion.h1>

        <AnimatePresence mode="wait">
          {!showFullStory ? (
            <motion.div
              key="summary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-8 shadow-lg mb-8"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Quick Summary
                </h2>
                <p className="text-lg text-slate-600 whitespace-pre-line leading-relaxed">
                  {summary}
                </p>
                <button
                  onClick={() => setShowFullStory(true)}
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg cursor-pointer"
                >
                  Read Full Story →
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg mb-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-slate-900">
                    Football
                  </h2>
                  <a
                    href="https://www.hudl.com/profile/14908647/Jacob-Smith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    View Hudl
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { src: '/FavoriteFootballPic.jpg', alt: 'Football action shot' },
                    { src: '/hocoKingFootball.jpg', alt: 'Homecoming King in football uniform' },
                    { src: '/HandshakeFootball.jpg', alt: 'Post-game handshake' },
                    { src: '/hocoKingWCeci.jpg', alt: 'Homecoming King with Ceci' }
                  ].map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                      onClick={() => setSelectedImage(img.src)}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-3 text-slate-600">
                  <p>
                    <strong className="text-slate-900">Position:</strong> Defensive End
                  </p>
                  <p>
                    <strong className="text-slate-900">Varsity starter</strong> Junior and Senior year, <strong className="text-slate-900">Team Captain</strong> Senior year
                  </p>
                  <p>
                    Recruited by Berry College, University of the Cumberlands, UVA-Wise, Culver-Stockton, and Erskine College
                  </p>
                  <p className="text-sm italic pt-2">
                    Playing football from 2nd grade through senior year taught me what it takes to commit to something hard. That focus carries over to how I approach engineering problems.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Other Things
                </h2>
                <div className="space-y-3 text-slate-600">
                  <p>
                    <strong className="text-slate-900">Faith:</strong> Follower of Christ - my faith shapes how I approach life and work
                  </p>
                  <p>
                    <strong className="text-slate-900">Spider-Man takes:</strong> Tobey is the best Peter, Andrew is the best Spider-Man, Tom is the best middle ground
                  </p>
                  <p>
                    <strong className="text-slate-900">On AI:</strong> Use it to learn faster, but build things yourself to actually understand them
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="fullstory"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
            >
              <button
                onClick={() => setShowFullStory(false)}
                  className="mb-8 px-6 py-3 bg-slate-900 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg cursor-pointer"
              >
                ← Back to Summary
              </button>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Early Days (Age 6-13)</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Started programming at 6 with batch scripts. Made text adventure games with echo commands and if statements. Simple stuff, but it taught me the basics of logic and control flow.
                  <br /><br />
                  Around 9, I got into web development - HTML, CSS, and jQuery. Built random websites, broke things, fixed them. The instant feedback of seeing code become a webpage was addictive.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mb-4">Football (2nd Grade - Senior Year)</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Started playing football in 2nd grade and played through senior year. At 14, I briefly tried Unity game dev and Blender for 3D modeling, but neither stuck - I was focused on football.
                  <br /><br />
                  Played Defensive End, made Varsity starter Junior year, became Team Captain Senior year. Got recruited by Berry College, University of the Cumberlands, UVA-Wise, Culver-Stockton, and Erskine College. Was planning to play in college.
                  <br /><br />
                  But the physical toll caught up with me. I couldn&apos;t sustain it long-term, so I made the call to step away and get back to what I started with: programming.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mb-4">Coming Back (Age 17-18)</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  After football, I came back to programming with a different mindset. This time I actually learned JavaScript properly instead of just using jQuery. Got into Node.js and Express, built real backend systems.
                  <br /><br />
                  Tried React for a bit, but realized I was way more interested in the server-side: data models, business logic, system architecture. Started doing freelance work and made actual money from code for the first time.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mb-4">The AI Phase (Age 17-19)</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  When AI coding tools became mainstream, I went all-in. Shipped projects faster than ever, made good money freelancing.
                  <br /><br />
                  But I started feeling like I was just prompting instead of actually programming. The speed was great, but I wasn&apos;t building the deep understanding I wanted. Started worrying about whether I actually knew how to code or if I was just good at using AI.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mb-4">Going Deeper (Age 19-20)</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Decided to take a step back and learn fundamentals properly. Started with C - watched long tutorials, built a finance ledger from scratch to understand memory management and pointers.
                  <br /><br />
                  When college started and we were learning Java, things clicked. Switched from C to Java and took a new approach: use AI to learn concepts quickly, then build projects myself using just documentation. Limited even Google searches since they push AI summaries now.
                  <br /><br />
                  Got serious about security (my first major). Realized this is where deep understanding matters most - threat modeling, attack vectors, security trade-offs. Things AI can explain but can&apos;t truly reason about.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mb-4">Now</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  I&apos;m a Cybersecurity + CS student at University of North Georgia, building projects with Java and Spring Boot. My focus is on backend security and performance.
                  <br /><br />
                  Current approach: Use AI as a learning accelerator, then build things myself. I make the architectural decisions, handle the security model, optimize performance, and make the trade-offs.
                  <br /><br />
                  What I care about:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6 ml-4">
                  <li>Security-first design (defense-in-depth, threat modeling, zero-trust)</li>
                  <li>Performance (targeting sub-50ms response times, 1000+ req/s)</li>
                  <li>Clean architecture that scales and stays maintainable</li>
                  <li>Understanding why things work, not just that they work</li>
                </ul>

                <h2 className="text-3xl font-bold text-slate-900 mb-4">Goals</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Long-term, I want to build financial infrastructure - payment systems, trading platforms, things that handle serious money and require institutional-grade security.
                  <br /><br />
                  <strong>Short-term:</strong> Master Java, Spring Security, distributed systems<br />
                  <strong>Medium-term:</strong> Contribute to major fintech open source projects<br />
                  <strong>Long-term:</strong> Build infrastructure that thousands of developers rely on
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fullscreen Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full"
            >
              <Image
                src={selectedImage}
                alt="Football photo"
                fill
                className="object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
