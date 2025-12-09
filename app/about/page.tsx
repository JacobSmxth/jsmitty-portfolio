'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, X } from 'lucide-react'
import { GradientHeading, Card, CardContent, CardHeader, CardTitle, Button } from '@/components/ui'
import { useBodyScrollLock } from '@/hooks'

export default function About() {
  const [showFullStory, setShowFullStory] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const footballImages = [
    {
      id: 1,
      title: 'Game Day',
      description: 'Senior year action shot',
      image: '/FavoriteFootballPic.jpg'
    },
    {
      id: 2,
      title: 'Homecoming King',
      description: 'Senior year homecoming',
      image: '/hocoKingFootball.jpg'
    },
    {
      id: 3,
      title: 'Sportsmanship',
      description: 'Post-game handshake',
      image: '/HandshakeFootball.jpg'
    },
    {
      id: 4,
      title: 'Homecoming',
      description: 'With Ceci at homecoming',
      image: '/hocoKingWCeci.jpg'
    }
  ]

  useBodyScrollLock(!!selectedImage)

  const summary = `I'm a Cybersecurity + CS student at University of North Georgia, focused on backend development and security.

Started coding at 6 with batch scripts, got into web development, then played football from 2nd grade through senior year where I was recruited by multiple colleges as a Defensive End.

After football, I came back to programming. Now I'm building projects with Java and Spring Boot, learning to ship secure, performant systems.

Currently learning: Backend security, distributed systems, and performance optimization`

  return (
    <div className="min-h-screen pt-32 px-4 pb-20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <GradientHeading as="h1" className="text-5xl md:text-6xl font-bold mb-3 text-center pb-2">
            About Me
          </GradientHeading>
          <p className="text-center text-slate-600 text-base md:text-lg">
            Cybersecurity + CS student building secure backend systems
          </p>
        </div>

        {!showFullStory ? (
          <div className="space-y-6">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Quick Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg text-slate-600 whitespace-pre-line leading-relaxed mb-6">
                  {summary}
                </p>
                <Button
                  onClick={() => setShowFullStory(true)}
                  variant="gradient"
                >
                  Read Full Story →
                </Button>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <CardTitle>Football</CardTitle>
                  <a
                    href="https://www.hudl.com/profile/14908647/Jacob-Smith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-md transition-colors duration-200 w-fit"
                  >
                    View Hudl
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {footballImages.map((img) => (
                    <div
                      key={img.id}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-200 border border-gray-200"
                      onClick={() => setSelectedImage(img.image)}
                    >
                      <Image
                        src={img.image}
                        alt={img.description}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2.5 text-slate-600 text-sm md:text-base">
                  <p>
                    <strong className="text-slate-900">Position:</strong> Defensive End
                  </p>
                  <p>
                    <strong className="text-slate-900">Varsity starter</strong> Junior and Senior year, <strong className="text-slate-900">Team Captain</strong> Senior year
                  </p>
                  <p>
                    Recruited by Berry College, University of the Cumberlands, UVA-Wise, Culver-Stockton, and Erskine College
                  </p>
                  <p className="text-sm italic pt-3 border-t border-gray-200 mt-4">
                    Playing football from 2nd grade through senior year taught me what it takes to commit to something hard. That focus carries over to how I approach engineering problems.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2.5 text-slate-600 text-sm md:text-base">
                  <p>
                    <strong className="text-slate-900">Faith:</strong> Follower of Christ - my faith shapes how I approach life and work.
                  </p>
                  <p>
                    <strong className="text-slate-900">Craft:</strong> I care about security, performance, and understanding why things work.
                  </p>
                  <p>
                    <strong className="text-slate-900">Learning:</strong> Use AI to learn faster, then build it myself to internalize it.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div>
            <Card className="p-8 md:p-12">
              <Button
                onClick={() => setShowFullStory(false)}
                variant="primary"
                className="mb-8"
              >
                ← Back to Summary
              </Button>

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
              </Card>
            </div>
          )}

        {/* Fullscreen Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
              <Image
                src={selectedImage}
                alt="Football photo"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
