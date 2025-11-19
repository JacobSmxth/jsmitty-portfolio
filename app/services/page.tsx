'use client'

import { motion } from 'framer-motion'
import { FaDesktop, FaSync, FaCode, FaTools } from 'react-icons/fa'

const services = [
  {
    icon: FaDesktop,
    title: 'Business Websites',
    description: 'Professional websites that get you online fast',
    details: [
      'Custom responsive design',
      'Mobile-friendly layout',
      'Contact forms & integrations',
      'SEO basics',
      'Fast loading speeds',
      '2 weeks delivery'
    ],
    pricing: '$1,500 - $3,500',
    idealFor: 'Restaurants, salons, contractors, professional services',
    color: 'primary'
  },
  {
    icon: FaSync,
    title: 'Website Redesign & Modernization',
    description: 'Breathe new life into your outdated website',
    details: [
      'Modern, clean design',
      'Improved mobile experience',
      'Better performance',
      'Updated content structure',
      'Preservation of SEO value'
    ],
    pricing: '$1,200 - $2,800',
    idealFor: 'Businesses with 5+ year old websites',
    color: 'coral'
  },
  {
    icon: FaCode,
    title: 'Custom Web Applications',
    description: 'Simple tools and dashboards for your business',
    details: [
      'Custom functionality',
      'Database setup',
      'User authentication',
      'Admin dashboards',
      'API integrations'
    ],
    pricing: 'Starting at $2,500',
    idealFor: 'Booking systems, inventory tracking, client portals',
    color: 'mauve'
  },
  {
    icon: FaTools,
    title: 'Website Maintenance & Hosting',
    description: 'Keep your site running smoothly',
    details: [
      'Hosting & domain management',
      'Security updates',
      'Monthly backups',
      'Uptime monitoring',
      'Content updates',
      'Performance monitoring'
    ],
    pricing: '$50 - $100/month',
    idealFor: 'Any website owner who wants peace of mind',
    color: 'navy'
  }
]

export default function Services() {
  return (
    <div className="min-h-screen pt-40 px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent text-center"
        >
          Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto"
        >
          Fast, modern, and affordable web solutions for your business. I help small businesses get online quickly with professional websites and custom tools.
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
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02]"
              >
                <div className={`w-16 h-16 rounded-md flex items-center justify-center mb-6 ${
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

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold text-slate-900">Pricing:</span>
                    <span className="text-lg font-bold text-blue-600">{service.pricing}</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    <strong>Ideal for:</strong> {service.idealFor}
                  </p>
                </div>

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
          className="mt-16 text-center bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg p-12 shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-white/80">
            Let&apos;s discuss your project and how I can help bring it to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-md hover:scale-105 transition-transform shadow-xl"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  )
}
