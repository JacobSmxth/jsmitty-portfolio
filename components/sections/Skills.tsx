'use client'

import { motion } from 'framer-motion'
import { Code2, Shield, Database, Wrench, Lightbulb } from 'lucide-react'
import { GradientHeading } from '@/components/ui'

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

const skillColorMap: Record<string, string> = {
  backend: 'border-blue-600',
  security: 'border-emerald-600',
  databases: 'border-purple-600',
  tools: 'border-orange-600',
  learning: 'border-amber-600'
}

const iconColorMap: Record<string, string> = {
  backend: 'text-blue-600',
  security: 'text-emerald-600',
  databases: 'text-purple-600',
  tools: 'text-orange-600',
  learning: 'text-amber-600'
}

export default function Skills() {
  return (
    <section className="py-32 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <GradientHeading as="h2" className="text-5xl md:text-6xl font-bold mb-4">
            Technical Skills
          </GradientHeading>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Core technologies and tools I work with
          </p>
        </motion.div>

        <div className="space-y-8">
          {Object.entries(skills).map(([key, category], index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`border-l-4 ${skillColorMap[key]} pl-6 py-4`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 ${iconColorMap[key]}`} />
                  <h3 className="text-2xl font-bold text-slate-800">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors border border-slate-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
