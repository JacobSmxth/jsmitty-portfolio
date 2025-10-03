'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const [showFullStory, setShowFullStory] = useState(false)

  const summary = `I'm a Cybersecurity + CS student passionate about backend development and security, learning to build systems that are both fast to ship AND fast to run.

Started programming at 6 with batch scripts. Explored game dev, 3D modeling, and even played football competitively before realizing I couldn't stay away from code.

Now I'm building foundational projects while learning Java, Spring Boot, and modern backend technologies. Using AI as a force multiplier while maintaining deep technical understanding.

Currently: Cybersecurity + CS Student (added CS before sophomore year because theory is interesting)
Focus: Learning backend security, performance optimization, and system architecture`

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-8 text-center"
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
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Football Journey
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>
                    <strong className="text-slate-900">Position:</strong> Defensive End (DE)
                  </p>
                  <p>
                    <strong className="text-slate-900">Achievements:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Captain of the football team Senior year</li>
                    <li>Started Varsity Junior and Senior year</li>
                    <li>Recruited by Berry College, University of the Cumberlands, UVA-Wise, Culver-Stockton, and Erskine College</li>
                  </ul>
                  <p className="italic text-pink-600">
                    Football taught me discipline, commitment, and teamwork - skills that translate directly to engineering.
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
                  Beyond Code
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p>
                    <strong className="text-blue-600">Faith:</strong> Avid follower of Christ - my faith shapes how I approach life and work
                  </p>
                  <p>
                    <strong className="text-blue-600">Spider-Man Fan:</strong> Tobey is the best Peter, Andrew is the best Spider-Man, Tom is the best middle ground
                  </p>
                  <p>
                    <strong className="text-blue-600">Philosophy:</strong> &ldquo;AI doesn&apos;t replace engineers. It separates the ones who understand from the ones who copy-paste.&rdquo;
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
                <h2 className="text-3xl font-bold text-slate-900 mb-4">The Beginning (Age 6)</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Most kids at 6 were playing video games. I was writing batch scripts.
                  <br /><br />
                  Started with simple echo commands and if statements, building text adventure trees, my first &ldquo;games.&rdquo; Looking back, those .bat files taught me the fundamentals: logic, branching, and the satisfaction of making a computer do what you want.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mb-4">The Web Years (Age 9-13)</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Discovered web development and dove deep into HTML and CSS. Learned jQuery when vanilla JavaScript felt too complex, I wanted to build things, not fight with syntax.
                  <br /><br />
                  Built random websites. Broke things. Fixed them. Learned that the browser was this incredible playground where you could see your code come to life instantly.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mb-4">The Detour (Age 14-17)</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  At 14, I wanted to make games. Tried Unity. C# scared me. The complexity overwhelmed me.
                  <br /><br />
                  Tried Blender for 3D modeling. Didn&apos;t click.
                  <br /><br />
                  Lost motivation. Started drawing for a bit. Eventually stopped.
                  <br /><br />
                  Then I focused on football. Really focused. For about 3 years, football was my thing. Got good at it. Committed to it.
                  <br /><br />
                  The offers came: Berry College, University of the Cumberlands, UVA-Wise, Culver-Stockton, and Erskine College. I was sure I would go to college just for football.
                  <br /><br />
                  But then it clicked, I couldn&apos;t physically sustain that level. As much as I miss it, as much as I wanted to, I was in pain, so I went back to my first love: computers.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mb-4">The Return (Age 17, Almost 18)</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  After football, I came back to programming.
                  <br /><br />
                  Not because I had to, not because someone told me it was a good career, but because I <em>missed</em> it. The problem-solving, the building, the satisfaction of creating something from nothing.
                  <br /><br />
                  That time away taught me something crucial, programming isn&apos;t just something I do, it&apos;s something I need to do.
                  <br /><br />
                  When I came back, I came back serious. Learned intermediate JavaScript properly. Dove into Node.js and Express. Built my first real backend systems.
                  <br /><br />
                  Tried React, didn&apos;t love it. Realized I preferred the server-side, data, logic, architecture.
                  <br /><br />
                  Started freelancing, made actual money writing code. For the first time, programming felt like a craft, not just a hobby.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mb-4">The AI Era (Age 17-19)</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Then AI tools arrived and I used them heavily.
                  <br /><br />
                  Built things faster than ever, made more money, shipped projects in days that used to take weeks.
                  <br /><br />
                  But something felt hollow, like I was just prompting, not programming. The speed was addictive but the depth was missing, the craft felt diluted.
                  <br /><br />
                  I realized I was afraid: afraid of being obsolete, afraid of not &ldquo;really&rdquo; being able to code, afraid that AI made me replaceable before I even started my career.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mb-4">The Depth (Age 19, Almost 20)</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  That fear pushed me to go deeper.
                  <br /><br />
                  Started learning C. Watched 8-hour tutorials. Built a finance ledger from scratch just to understand memory management and pointers.
                  <br /><br />
                  Then school started. We were learning Java. I was interested in fintech. The pieces clicked.
                  <br /><br />
                  Switched from C to Java. But this time, different approach, use AI as my &ldquo;tutorial&rdquo; then throw myself into the deep end, no AI, only docs, even limited Google searches (Google has that AI so I try to avoid it).
                  <br /><br />
                  Started focusing on security (my first major). Realized, this is where AI can&apos;t replace humans. Security requires adversarial thinking, threat modeling, understanding of context and trade-offs, things AI hallucinates.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mb-4">Now</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  I&apos;m a Cybersecurity + CS student building secure fintech systems.
                  <br /><br />
                  My approach, use AI as my &ldquo;tutorial&rdquo; then throw myself into the deep end, no AI, only docs, even limited Google searches (Google has that AI so I try to avoid it). I architect the systems, I design the security model, I optimize the performance, I make the trade-offs.
                  <br /><br />
                  I care about
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6 ml-4">
                  <li>Security first (defense-in-depth, threat modeling, zero-trust)</li>
                  <li>Performance (sub-50ms response times, handling 1000+ req/s)</li>
                  <li>Clean architecture (systems that scale, code that&apos;s maintainable)</li>
                  <li>Understanding WHY (not just copying what works)</li>
                </ul>

                <h2 className="text-3xl font-bold text-slate-900 mb-4">What I&apos;m Building Toward</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  I don&apos;t want to be just another backend developer. I want to be the person who builds the payment infrastructure, the trading systems, the financial platforms that move millions of dollars and require institutional-grade security.
                  <br /><br />
                  <strong>Short-term</strong>, Master Java, Spring Security, distributed systems,<br />
                  <strong>Medium-term</strong>, Contribute to major fintech open source projects,<br />
                  <strong>Long-term</strong>, Build something that thousands of developers rely on
                </p>

                <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                  <p className="text-lg italic text-slate-900 text-center">
                    &ldquo;AI doesn&apos;t replace engineers. It separates the ones who understand from the ones who copy-paste.&rdquo;
                    <br /><br />
                    <span className="font-bold">I&apos;m in the first group.</span>
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
