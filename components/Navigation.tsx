'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    const checkModalState = () => {
      const modalOpen = document.body.hasAttribute('data-modal-open')
      setIsModalOpen(modalOpen)
    }

    const observer = new MutationObserver(checkModalState)
    observer.observe(document.body, { attributes: true })

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [lastScrollY])

  const shouldShow = isVisible && !isModalOpen

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: shouldShow ? 0 : -100, 
        opacity: shouldShow ? 1 : 0 
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-40 glass-effect rounded-2xl px-8 py-4 shadow-xl"
    >
      <ul className="flex gap-8 items-center">
        <li className="font-bold text-xl text-slate-800 mr-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Jacob Smith
        </li>
        {navItems.map((item) => {
          const isActive = pathname === item.path
          return (
            <li key={item.path} className="relative">
              <Link
                href={item.path}
                className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium relative z-10 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </li>
          )
        })}
      </ul>
    </motion.nav>
  )
}