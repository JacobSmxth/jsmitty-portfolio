'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Uses', path: '/uses' },
  { name: 'Now', path: '/now' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const shouldShow = isVisible && !isModalOpen

  return (
    <>
      {/* Desktop & Mobile Navigation Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: shouldShow ? 0 : -100, 
          opacity: shouldShow ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-40 glass-effect rounded-2xl px-4 sm:px-8 py-4 shadow-xl w-[calc(100%-2rem)] sm:w-auto max-w-6xl"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/"
            className="font-bold text-lg sm:text-xl text-slate-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Jacob Smith
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center ml-12">
            {navItems.map((item) => {
              const isActive = pathname === item.path
              return (
                <li key={item.path} className="relative">
                  <Link
                    href={item.path}
                    className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium relative z-10 block ${
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
            type="button"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-white z-40 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-200">
                  <Link
                    href="/"
                    className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Jacob Smith
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-slate-700 hover:text-blue-600 transition-colors"
                    aria-label="Close menu"
                    type="button"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <ul className="flex flex-col p-6 gap-2">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.path
                    return (
                      <motion.li
                        key={item.path}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.path}
                          className={`block px-6 py-4 rounded-xl transition-all duration-300 font-medium ${
                            isActive
                              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                              : 'text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}