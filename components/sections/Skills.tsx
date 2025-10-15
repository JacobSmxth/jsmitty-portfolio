'use client'

import { motion } from 'framer-motion'
import { Code2, Shield, Database, Wrench, Lightbulb } from 'lucide-react'
import Image from 'next/image'

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
    items: ['Spring Security', 'PostgreSQL', 'Docker'],
    color: 'from-amber-500 to-amber-600'
  }
}

export default function Skills() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Building expertise in backend development, security, and modern web technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, category], index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-slate-200"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-slate-50 text-slate-700 rounded-xl text-sm font-medium hover:bg-slate-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-slate-800">GitHub Activity</h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <Image
                src="https://github-readme-stats.vercel.app/api?username=jacobsmxth&show_icons=true&theme=default&hide_border=true&bg_color=ffffff&title_color=1e293b&text_color=475569&icon_color=3b82f6"
                alt="GitHub Stats"
                width={400}
                height={200}
                className="max-w-full h-auto"
              />
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <Image
                src="https://ghchart.rshah.org/3b82f6/jacobsmxth"
                alt="GitHub Contributions"
                width={400}
                height={200}
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
