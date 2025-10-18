'use client'

import { motion } from 'framer-motion'
import { Code2, Shield, Database, Wrench, Lightbulb } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const skills = {
  backend: {
    title: 'Backend',
    icon: Code2,
    items: ['Java', 'Spring Boot', 'REST APIs', 'Spring Data JPA'],
    color: 'from-blue-500 to-blue-600'
  },
  security: {
    title: 'Security',
    icon: Shield,
    items: ['Input Validation', 'Hashing', 'Security Fundamentals'],
    color: 'from-emerald-500 to-emerald-600'
  },
  databases: {
    title: 'Databases',
    icon: Database,
    items: ['H2', 'SQL', 'JPA/Hibernate'],
    color: 'from-purple-500 to-purple-600'
  },
  tools: {
    title: 'Tools',
    icon: Wrench,
    items: ['Git', 'IntelliJ', 'Neovim', 'Postman', 'Gradle'],
    color: 'from-orange-500 to-orange-600'
  },
  learning: {
    title: 'Currently Learning',
    icon: Lightbulb,
    items: ['Spring Security', 'PostgreSQL'],
    color: 'from-amber-500 to-amber-600'
  }
}

export default function Skills() {
  const [statsError, setStatsError] = useState(false)
  const [chartError, setChartError] = useState(false)

  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Core technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {Object.entries(skills).map(([key, category], index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white text-slate-700 rounded-lg text-sm font-medium border border-slate-200 hover:border-slate-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* GitHub Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-slate-800 text-center">GitHub Activity</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-white p-4 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all">
              {!statsError ? (
                <Image
                  src="https://github-readme-stats.vercel.app/api?username=jacobsmxth&show_icons=true&theme=default&hide_border=true&bg_color=f8fafc&title_color=1e293b&text_color=475569&icon_color=3b82f6"
                  alt="GitHub Stats"
                  width={400}
                  height={200}
                  className="max-w-full h-auto rounded-lg"
                  onError={() => setStatsError(true)}
                />
              ) : (
                <div className="w-full aspect-[2/1] flex items-center justify-center text-slate-500">
                  <div className="text-center">
                    <p className="font-medium">GitHub Stats Unavailable</p>
                    <p className="text-sm mt-1">Visit my GitHub profile</p>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white p-4 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all">
              {!chartError ? (
                <Image
                  src="https://ghchart.rshah.org/3b82f6/jacobsmxth"
                  alt="GitHub Contributions"
                  width={400}
                  height={200}
                  className="max-w-full h-auto rounded-lg"
                  onError={() => setChartError(true)}
                />
              ) : (
                <div className="w-full aspect-[2/1] flex items-center justify-center text-slate-500">
                  <div className="text-center">
                    <p className="font-medium">GitHub Contributions Unavailable</p>
                    <p className="text-sm mt-1">Visit my GitHub profile</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
