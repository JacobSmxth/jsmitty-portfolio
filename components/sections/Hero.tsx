'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaJava, FaGitAlt } from 'react-icons/fa'
import { SiSpringboot, SiPostgresql, SiIntellijidea, SiNeovim, SiPostman, SiGradle, SiArchlinux, SiLogitech } from 'react-icons/si'
import ShinyText from '@/components/ShinyText'
import ProfileCard from '@/components/ProfileCard'
import LogoLoop from '@/components/LogoLoop'

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
      <div className="fixed inset-0 z-0">
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
                showUserInfo={true}
                enableTilt={true}
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
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 drop-shadow-sm">
                  <ShinyText
                    text="Cybersecurity + CS Student"
                    speed={4}
                    className="text-slate-700"
                  />
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed drop-shadow-sm">
                  Aspiring backend developer passionate about security, clean architecture, and modern technologies.
                  Building foundational projects while learning Java, Spring Boot, and doing freelance web development.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/jacobsmxth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-slate-800 text-white rounded-md hover:bg-slate-900 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <FaGithub size={24} className="group-hover:rotate-12 transition-transform" />
                </a>
                <a
                  href="https://linkedin.com/in/jacobsmxth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <FaLinkedin size={24} className="group-hover:rotate-12 transition-transform" />
                </a>
                <a
                  href="mailto:jacobsmith@jsmitty.com"
                  className="group p-4 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <FaEnvelope size={24} className="group-hover:rotate-12 transition-transform" />
                </a>
              </div>

              <div>
                <a
                  href="/JacobResume2025Internships.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <FaDownload className="group-hover:bounce" />
                  View Resume
                </a>
              </div>

              <div className="text-slate-400 italic text-base">
                <div className="p-6 bg-white/60 rounded-md border border-white/30 shadow-lg">
                  &ldquo;With great power comes great responsibility&rdquo;
                  <div className="text-sm mt-2 text-slate-500">- Uncle Ben</div>
                </div>
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
                direction="left"
                logoHeight={40}
                gap={48}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="rgba(255, 255, 255, 0.9)"
                ariaLabel="Technology stack"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
