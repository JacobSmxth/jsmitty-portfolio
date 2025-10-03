'use client'

import { motion } from 'framer-motion'

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-8 leading-tight pb-2"
        >
          Blog
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-12 shadow-lg"
        >
          <div className="text-6xl mb-6">📝</div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Coming Soon
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            I&apos;m currently building out my blog platform with a custom CMS. Soon I&apos;ll be sharing thoughts on backend development, security, fintech, and my journey as a developer.
          </p>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
            <p className="text-lg text-slate-700 italic leading-relaxed">
              &ldquo;When we speak of free software, we are referring to freedom, not price.&rdquo;
            </p>
            <p className="text-slate-500 text-sm mt-2 font-semibold">- Richard Stallman</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-slate-500"
        >
          Want to be notified when I publish my first post?{' '}
          <a href="/contact" className="text-blue-600 hover:underline font-semibold cursor-pointer">
            Get in touch
          </a>
        </motion.div>
      </div>
    </div>
  )
}
