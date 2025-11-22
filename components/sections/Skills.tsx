'use client'

import { motion } from 'framer-motion'
import { FaJava, FaReact, FaGitAlt, FaDocker, FaNode, FaPython } from 'react-icons/fa'
import { SiSpring, SiPostgresql, SiMysql, SiMongodb, SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiGradle, SiIntellijidea, SiNeovim, SiPostman, SiLinux, SiFirebase } from 'react-icons/si'
import { BiShield, BiCodeAlt, BiData, BiWrench, BiBrain } from 'react-icons/bi'
import { GradientHeading } from '@/components/ui'

const skills = {
  backend: {
    title: 'Backend Development',
    icon: BiCodeAlt,
    items: ['Java', 'Spring Boot', 'REST APIs', 'Spring Data JPA', 'Node.js', 'Python'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700'
  },
  frontend: {
    title: 'Frontend Development',
    icon: FaReact,
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    textColor: 'text-cyan-700'
  },
  databases: {
    title: 'Databases & Data',
    icon: BiData,
    items: ['PostgreSQL', 'MySQL', 'H2', 'MongoDB', 'SQL', 'JPA/Hibernate', 'Firestore'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-700'
  },
  security: {
    title: 'Security & Best Practices',
    icon: BiShield,
    items: ['Input Validation', 'Authentication', 'Authorization', 'Data Encryption', 'Security Fundamentals', 'OWASP'],
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-700'
  },
  tools: {
    title: 'Tools & DevOps',
    icon: BiWrench,
    items: ['Git', 'GitHub', 'IntelliJ IDEA', 'Neovim', 'Postman', 'Gradle', 'Linux', 'Docker'],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-700'
  },
  learning: {
    title: 'Current Focus',
    icon: BiBrain,
    items: ['Spring Security', 'PostgreSQL', 'Docker', 'Microservices', 'Cloud Platforms'],
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-700'
  }
}

export default function Skills() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <GradientHeading as="h2" className="text-4xl md:text-5xl font-bold mb-4">
            Technical Skills
          </GradientHeading>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Technologies and tools I use to build full-stack applications
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([key, category], index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${category.bgColor} ${category.borderColor} border-2 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${category.textColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-2 ${category.bgColor} ${category.textColor} rounded-lg text-sm font-semibold hover:shadow-md transition-all duration-200 border ${category.borderColor}`}
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
