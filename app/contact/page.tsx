'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="min-h-screen pt-40 px-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent text-center"
        >
          Get In Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 text-center mb-12"
        >
          I&apos;m always open to discussing new projects, opportunities, or just chatting about tech and security.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.a
            href="mailto:jacobsmith@jsmitty.com"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            <FaEnvelope className="text-blue-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Work Inquiries
            </h3>
            <p className="text-blue-600 font-semibold">
              jacobsmith@jsmitty.com
            </p>
            <p className="text-slate-500 mt-2">
              For project inquiries and freelance work
            </p>
          </motion.a>

          <motion.a
            href="mailto:jacob.d.smith@live.com"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            <FaEnvelope className="text-rose-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Recruiters
            </h3>
            <p className="text-rose-600 font-semibold">
              jacob.d.smith@live.com
            </p>
            <p className="text-slate-500 mt-2">
              For job opportunities and recruiting
            </p>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/jacobsmxth"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            <FaLinkedin className="text-blue-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              LinkedIn
            </h3>
            <p className="text-blue-600 font-semibold">
              /in/jacobsmxth
            </p>
            <p className="text-slate-500 mt-2">
              Professional networking and connections
            </p>
          </motion.a>

          <motion.a
            href="https://github.com/jacobsmxth"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            <FaGithub className="text-slate-900 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              GitHub
            </h3>
            <p className="text-slate-900 font-semibold">
              /jacobsmxth
            </p>
            <p className="text-slate-500 mt-2">
              Check out my code and contributions
            </p>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-900 text-white rounded-lg p-8 text-center"
        >
          <FaGlobe className="mx-auto mb-4" size={40} />
          <h3 className="text-2xl font-bold mb-2">Website</h3>
          <p className="text-xl font-semibold text-amber-50">
            jsmitty.com
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center text-sm italic text-pink-600"
        >
          &ldquo;Whatever you do, work at it with all your heart&rdquo; - Colossians 3:23
        </motion.div>
      </div>
    </div>
  )
}
