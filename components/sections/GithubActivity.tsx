'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Github } from 'lucide-react'

export default function GithubActivity() {
  const [statsError, setStatsError] = useState(false)

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 shadow-lg">
              <Github className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent pb-2">
              GitHub Activity
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My open source contributions and coding activity
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Contribution Graph */}
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-md border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 w-full max-w-4xl">
              <Image
                src="https://ghchart.rshah.org/3b82f6/jacobsmxth"
                alt="GitHub Contribution Graph"
                width={900}
                height={150}
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* GitHub Stats */}
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-md border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 w-full max-w-xl">
              {!statsError ? (
                <Image
                  src="https://github-readme-stats.vercel.app/api?username=jacobsmxth&show_icons=true&theme=default&hide_border=true&bg_color=ffffff00&title_color=1e293b&text_color=475569&icon_color=3b82f6"
                  alt="GitHub Stats"
                  width={500}
                  height={200}
                  className="max-w-full h-auto rounded-lg mx-auto"
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}
