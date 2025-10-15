'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('jacobsmith@jsmitty.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl will-change-transform"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl will-change-transform"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            I&apos;m always open to discussing new opportunities, collaborations, or just chatting about tech.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <button
            onClick={copyEmail}
            className="group p-8 bg-white/5 rounded-3xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 border border-white/10 hover:border-white/20 will-change-transform w-full"
          >
            <FaEnvelope className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} />
            <h3 className="font-bold mb-3 text-xl">
              {copied ? 'Email Copied!' : 'Email (Work)'}
            </h3>
            <p className="text-sm text-slate-300">jacobsmith@jsmitty.com</p>
            <p className="text-xs text-slate-400 mt-2">Click to copy</p>
          </button>

          <a
            href="https://linkedin.com/in/jacobsmxth"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-white/5 rounded-3xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 border border-white/10 hover:border-white/20 will-change-transform"
          >
            <FaLinkedin className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} />
            <h3 className="font-bold mb-3 text-xl">LinkedIn</h3>
            <p className="text-sm text-slate-300">jacobsmxth</p>
          </a>

          <a
            href="https://github.com/jacobsmxth"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-white/5 rounded-3xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 border border-white/10 hover:border-white/20 will-change-transform"
          >
            <FaGithub className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} />
            <h3 className="font-bold mb-3 text-xl">GitHub</h3>
            <p className="text-sm text-slate-300">jacobsmxth</p>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Send a Message
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 max-w-2xl mx-auto">
            <p className="text-slate-300 italic text-lg">
              &ldquo;Two are better than one, because they have a good return for their labor&rdquo;
            </p>
            <p className="text-slate-400 text-sm mt-2">- Ecclesiastes 4:9</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
