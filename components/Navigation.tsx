'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { useBodyScrollLock } from '@/hooks'
import { navLinks } from '@/config/navigation'

const leftNavItems = navLinks.slice(0, 4)
const rightNavItems = navLinks.slice(4)
const allNavItems = navLinks

export default function Navigation() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollYRef = useRef(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isDarkPage = false // All pages now use light theme

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollYRef.current || currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        setIsVisible(false)
      }

      lastScrollYRef.current = currentScrollY
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
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useBodyScrollLock(isMobileMenuOpen)

  const shouldShow = isVisible && !isModalOpen

  return (
    <>
      {/* Desktop & Mobile Navigation Bar */}
      <nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-40 rounded-md px-6 sm:px-8 py-4 shadow-lg bg-white/95 backdrop-blur-sm border border-gray-200 transition-transform duration-300 ease-out"
        style={{
          width: 'calc(100% - 3rem)',
          maxWidth: '1200px',
          transform: `translate(-50%, ${shouldShow ? '0' : '-120px'})`
        }}
      >
        <div className="hidden md:grid md:grid-cols-3 items-center w-full gap-4">
          {/* Left Nav Items */}
          <ul className="flex gap-4 lg:gap-6 items-center justify-end">
            {leftNavItems.map((item) => {
              const isActive = pathname === item.path
              return (
                <li key={item.path} className="relative">
                  <Link
                    href={item.path}
                    className={`px-3 lg:px-4 py-3 rounded transition-all duration-200 font-medium relative z-10 block text-sm lg:text-base ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {isActive && (
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded shadow-lg"
                    />
                  )}
                </li>
              )
            })}
          </ul>

          {/* Centered Logo */}
          <Link
            href="/"
            className="font-bold text-lg sm:text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap text-center"
          >
            Jacob Smith
          </Link>

          {/* Right Nav Items */}
          <ul className="flex gap-4 lg:gap-6 items-center justify-start">
            {rightNavItems.map((item) => {
              const isActive = pathname === item.path
              return (
                <li key={item.path} className="relative">
                  <Link
                    href={item.path}
                    className={`px-3 lg:px-4 py-3 rounded transition-all duration-200 font-medium relative z-10 block text-sm lg:text-base ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {isActive && (
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded shadow-lg"
                    />
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        {/* Mobile view */}
        <div className="md:hidden flex items-center justify-between w-full">
          <Link
            href="/"
            className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap"
          >
            Jacob Smith
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isDarkPage
                ? 'text-slate-300 hover:text-blue-400'
                : 'text-slate-700 hover:text-blue-600'
            }`}
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
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden transition-opacity duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <div
            className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-white z-40 md:hidden shadow-2xl transition-transform duration-300 ease-out"
          >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-200">
                  <Link
                    href="/"
                    className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap"
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
                  {allNavItems.map((item, index) => {
                    const isActive = pathname === item.path
                    return (
                      <li key={item.path}>
                        <Link
                          href={item.path}
                          className={`block px-6 py-4 rounded transition-all duration-300 font-medium ${
                            isActive
                              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                              : 'text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </>
        )}
    </>
  )
}
