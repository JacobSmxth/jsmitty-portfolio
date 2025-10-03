'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/LineArtBackgroundMtn.png"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40"></div>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="mb-12"
        >
          <div className="relative w-56 h-56 mx-auto rounded-full overflow-hidden shadow-2xl ring-8 ring-white/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-10"></div>
            <Image
              src="/assets/headshot-400w.webp"
              alt="Jacob Smith"
              fill
              className="object-cover"
              priority
              sizes="224px"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent drop-shadow-sm">
              Jacob
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent drop-shadow-sm">
              Smith
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-700 mb-4 drop-shadow-sm">
            Cybersecurity + CS Student
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            Aspiring backend developer passionate about security, clean architecture, and modern technologies.
            Building foundational projects while learning Java, Spring Boot, and web development.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-wrap gap-6 justify-center mb-12"
        >
          <a
            href="https://github.com/jacobsmxth"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-slate-800 text-white rounded-2xl hover:bg-slate-900 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <FaGithub size={28} className="group-hover:rotate-12 transition-transform" />
          </a>
          <a
            href="https://linkedin.com/in/jacobsmxth"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <FaLinkedin size={28} className="group-hover:rotate-12 transition-transform" />
          </a>
          <a
            href="mailto:jacobsmith@jsmitty.com"
            className="group p-4 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
          >
            <FaEnvelope size={28} className="group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-16"
        >
          <a
            href="/MyResume2025.pdf"
            download
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <FaDownload className="group-hover:bounce" />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-slate-400 italic text-lg max-w-2xl mx-auto"
        >
          <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg">
            &ldquo;With great power comes great responsibility&rdquo;
            <div className="text-sm mt-2 text-slate-500">- Uncle Ben</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}