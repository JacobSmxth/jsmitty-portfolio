'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('jacobsmith@jsmitty.com').then(() => {
        setCopyStatus('success')
        setTimeout(() => setCopyStatus('idle'), 2000)
      }).catch((err) => {
        console.error('Failed to copy email', err)
        setCopyStatus('error')
        setTimeout(() => setCopyStatus('idle'), 2000)
      })
    } else {
      const textArea = document.createElement('textarea')
      textArea.value = 'jacobsmith@jsmitty.com'
      document.body.appendChild(textArea)
      textArea.select()
      try {
        const success = document.execCommand('copy')
        if (success) {
          setCopyStatus('success')
        } else {
          setCopyStatus('error')
        }
        setTimeout(() => setCopyStatus('idle'), 2000)
      } catch (err) {
        console.error('Failed to copy email', err)
        setCopyStatus('error')
        setTimeout(() => setCopyStatus('idle'), 2000)
      }
      document.body.removeChild(textArea)
    }
  }
  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-lg md:text-xl text-slate-100 max-w-3xl mx-auto">
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
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border border-white/10">
            <CardContent className="p-8 flex flex-col items-center text-center gap-2">
              <FaEnvelope className="mb-2" size={48} />
              <h3 className="font-bold text-xl">
                {copyStatus === 'success' ? 'Email Copied!' : copyStatus === 'error' ? 'Copy Failed' : 'Email (Work)'}
              </h3>
              <p className="text-sm text-slate-100">jacobsmith@jsmitty.com</p>
              <p className={`text-xs ${copyStatus === 'error' ? 'text-red-200' : 'text-slate-100'}`}>
                {copyStatus === 'error' ? 'Try selecting the text manually' : 'Click to copy'}
              </p>
              <Button
                variant="ghost"
                size="md"
                className="text-white hover:text-white hover:bg-white/10 mt-2"
                onClick={copyEmail}
              >
                Copy Email
              </Button>
            </CardContent>
          </Card>

          <Card variant="interactive" className="bg-white/5 border border-white/10 text-white">
            <a
              href="https://linkedin.com/in/jacobsmxth"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full"
            >
              <CardContent className="p-8 flex flex-col items-center text-center gap-2">
                <FaLinkedin className="mb-2" size={48} />
                <h3 className="font-bold text-xl">LinkedIn</h3>
                <p className="text-sm text-slate-100">jacobsmxth</p>
              </CardContent>
            </a>
          </Card>

          <Card variant="interactive" className="bg-white/5 border border-white/10 text-white">
            <a
              href="https://github.com/jacobsmxth"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full"
            >
              <CardContent className="p-8 flex flex-col items-center text-center gap-2">
                <FaGithub className="mb-2" size={48} />
                <h3 className="font-bold text-xl">GitHub</h3>
                <p className="text-sm text-slate-100">jacobsmxth</p>
              </CardContent>
            </a>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button
            href="/contact"
            variant="gradient"
            size="lg"
            className="shadow-lg"
          >
            Send a Message
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-slate-200 text-sm"
        >
          <p>Prefer email? I typically respond within 24 hours.</p>
        </motion.div>
      </div>
    </section>
  )
}
