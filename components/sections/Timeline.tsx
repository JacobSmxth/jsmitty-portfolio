'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ExperienceModal from '@/components/ExperienceModal'
import { experiences, Experience } from '@/data/experiences'
import { Briefcase } from 'lucide-react'
import { GradientHeading } from '@/components/ui'

export default function Timeline() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)

  useEffect(() => {
    if (selectedExperience) {
      document.body.setAttribute('data-modal-open', 'true')
    } else {
      document.body.removeAttribute('data-modal-open')
    }

    return () => {
      document.body.removeAttribute('data-modal-open')
    }
  }, [selectedExperience])

  return (
    <section id="timeline" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50 shadow-2xl relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <GradientHeading as="h2" className="text-5xl md:text-6xl font-bold pb-2">
              Experience
            </GradientHeading>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My professional journey from hospitality to education and freelance development.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.2) }}
                className="relative pl-24 group"
              >
                <div className="absolute left-5 top-8 w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform" />

                <div
                  onClick={() => setSelectedExperience(exp)}
                  className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100 hover:border-blue-200 will-change-transform"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                    <span className="text-sm text-slate-500 font-semibold bg-slate-50 px-4 py-2 rounded-xl">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-blue-600 font-semibold mb-3 text-lg">
                    {exp.company}
                  </p>
                  <p className="text-slate-600 leading-relaxed">{exp.summary}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-slate-400 group-hover:text-blue-500 transition-colors">
                    Click to learn more →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedExperience && (
            <ExperienceModal
              experience={selectedExperience}
              onClose={() => setSelectedExperience(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}