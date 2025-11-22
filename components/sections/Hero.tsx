'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaJava, FaGitAlt } from 'react-icons/fa'
import { SiSpringboot, SiIntellijidea, SiNeovim, SiPostman, SiGradle, SiArchlinux, SiLogitech } from 'react-icons/si'
import ShinyText from '@/components/ShinyText'
import ProfileCard from '@/components/ProfileCard'
import LogoLoop from '@/components/LogoLoop'
import { Button } from '@/components/ui'

export default function Hero() {
  const techStack = [
    { node: <FaJava />, title: 'Java', href: 'https://www.java.com' },
    { node: <SiSpringboot />, title: 'Spring Boot', href: 'https://spring.io/projects/spring-boot' },
    { node: <SiIntellijidea />, title: 'IntelliJ IDEA', href: 'https://www.jetbrains.com/idea/' },
    { node: <SiNeovim />, title: 'Neovim', href: 'https://neovim.io/' },
    { node: <SiPostman />, title: 'Postman', href: 'https://www.postman.com/' },
    { node: <SiGradle />, title: 'Gradle', href: 'https://gradle.org/' },
    { node: <SiArchlinux />, title: 'Arch Linux', href: 'https://archlinux.org/' },
    { node: <SiLogitech />, title: 'Logitech', href: 'https://www.logitech.com/' },
    { node: <FaGitAlt />, title: 'Git', href: 'https://git-scm.com' }
  ];

  return (
    <>
      <div className="fixed inset-0 z-0 bg-gray-50"></div>

      <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - ProfileCard */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              className="flex justify-center lg:justify-end"
            >
              <ProfileCard
                name="Jacob Smith"
                title="Cybersecurity + CS Student"
                handle="jsmitty"
                status="Available for Work"
                contactText="Contact"
                avatarUrl="/assets/headshot-400w.webp"
                miniAvatarUrl="/assets/headshot-400w.webp"
                enableTilt
                enableMobileTilt={false}
                onContactClick={() => {
                  window.location.href = 'mailto:jacobsmith@jsmitty.com';
                }}
              />
            </motion.div>

            {/* Right side - Text content */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center lg:text-left space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                  <ShinyText
                    text="Cybersecurity + CS Student"
                    speed={4}
                    className="text-slate-700"
                  />
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  CS & Cybersecurity student building full-stack applications and backend systems
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button variant="secondary" size="lg" className="shadow-md hover:shadow-lg" href="https://github.com/jacobsmxth" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} />
                  GitHub
                </Button>
                <Button variant="primary" size="lg" className="shadow-md hover:shadow-lg" href="https://linkedin.com/in/jacobsmxth" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={20} />
                  LinkedIn
                </Button>
                <Button variant="gradient" size="lg" className="shadow-md hover:shadow-lg" href="mailto:jacobsmith@jsmitty.com">
                  <FaEnvelope size={20} />
                  Email
                </Button>
              </div>

              <div>
                <Button
                  variant="gradient"
                  size="lg"
                  className="shadow-lg hover:shadow-xl"
                  href="/JacobResume2025Internships.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDownload />
                  View Resume
                </Button>
              </div>

            </motion.div>
          </div>

          {/* Tech Stack Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-16"
          >
            <h3 className="text-center text-sm font-semibold text-slate-500 mb-6 uppercase tracking-wider">
              Technologies & Tools
            </h3>
            <div className="h-16">
              <LogoLoop
                logos={techStack}
                speed={50}
                gap={48}
                pauseOnHover
                ariaLabel="Technology stack"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
