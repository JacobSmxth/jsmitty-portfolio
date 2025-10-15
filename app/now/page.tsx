'use client'

import { motion } from 'framer-motion'
import { BookOpen, Code, Target, Lightbulb } from 'lucide-react'

const nowData = {
  updated: 'January 2025',
  sections: [
    {
      title: 'Learning',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      items: [
        'Deep diving into Spring Security for authentication/authorization',
        'PostgreSQL for production-ready database skills',
        'Docker basics for containerization'
      ]
    },
    {
      title: 'Building',
      icon: Code,
      color: 'from-purple-500 to-purple-600',
      items: [
        'Expanding Inventory Management API with auth layer',
        'Learning Log posts about Spring Boot patterns',
        'Contributing to open source Java projects'
      ]
    },
    {
      title: 'Reading',
      icon: Lightbulb,
      color: 'from-emerald-500 to-emerald-600',
      items: [
        'Spring Security in Action',
        'Designing Data-Intensive Applications',
        'r/java and r/springframework daily'
      ]
    },
    {
      title: 'Goals',
      icon: Target,
      color: 'from-orange-500 to-orange-600',
      items: [
        'Land a backend engineering internship for Summer 2025',
        'Contribute to a major Java open source project',
        'Build a production-ready fintech API'
      ]
    }
  ]
}

export default function Now() {
  return (
    <main className="min-h-screen pt-40 pb-20 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 pb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
            What I&apos;m Doing Now
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
            A snapshot of what I&apos;m currently focused on
          </p>
          <p className="text-sm text-slate-500">
            Last updated: {nowData.updated}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {nowData.sections.map((section, index) => {
            const Icon = section.icon
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${section.color} mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl font-bold mb-6 text-slate-800">
                  {section.title}
                </h2>

                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 + itemIndex * 0.05 }}
                      className="flex items-start text-slate-700"
                    >
                      <span className={`bg-gradient-to-r ${section.color} bg-clip-text text-transparent mr-3 font-bold`}>
                        →
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border border-blue-100 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-slate-800">
            Interested in collaborating?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, projects, or just chatting about backend development and technology.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* About /now pages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center text-slate-500 text-sm"
        >
          <p>
            This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">/now page</a>, inspired by Derek Sivers.
          </p>
          <p className="mt-2">
            It&apos;s a living document that shows what I&apos;m focused on at this point in my life.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
