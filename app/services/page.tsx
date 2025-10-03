'use client'

import { motion } from 'framer-motion'
import { FaCode, FaGraduationCap, FaLaptopCode, FaServer } from 'react-icons/fa'

const services = [
  {
    icon: FaServer,
    title: 'API Development',
    description: 'Building secure, scalable RESTful APIs with modern frameworks',
    details: [
      'Java Spring Boot development',
      'RESTful API design',
      'Database design and optimization',
      'Security best practices',
      'API documentation',
      'Performance optimization'
    ],
    color: 'primary'
  },
  {
    icon: FaLaptopCode,
    title: 'Full-Stack Web Development',
    description: 'Complete web solutions from front-end to back-end',
    details: [
      'Next.js & React applications',
      'Responsive, modern UI/UX',
      'Backend integration',
      'Database setup (Firestore, PostgreSQL)',
      'Deployment and hosting',
      'Ongoing maintenance'
    ],
    color: 'coral'
  },
  {
    icon: FaCode,
    title: 'Front-End Development',
    description: 'Beautiful, responsive user interfaces',
    details: [
      'React/Next.js development',
      'Tailwind CSS styling',
      'Responsive design',
      'Modern animations',
      'Component libraries',
      'Performance optimization'
    ],
    color: 'mauve'
  },
  {
    icon: FaGraduationCap,
    title: 'Computer Science Tutoring',
    description: 'One-on-one tutoring for CS fundamentals and programming',
    details: [
      'Programming fundamentals',
      'Data structures & algorithms',
      'Web development basics',
      'Code review and best practices',
      'Project guidance',
      'Career mentorship'
    ],
    color: 'navy'
  }
]

export default function Services() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6 text-center"
        >
          Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto"
        >
          I offer a range of development and educational services. Whether you need a full application, API development, or personalized tutoring, I&apos;m here to help.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02]"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  service.color === 'primary' ? 'bg-blue-500' :
                  service.color === 'coral' ? 'bg-rose-500' :
                  service.color === 'mauve' ? 'bg-pink-500' :
                  'bg-slate-800'
                }`}>
                  <Icon className="text-white" size={32} />
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h2>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">✓</span>
                      <span className="text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-12 shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-white/80">
            Let&apos;s discuss your project and how I can help bring it to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:scale-105 transition-transform shadow-xl"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  )
}
