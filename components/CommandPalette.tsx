'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Command, Search, Home, FolderOpen, User, Mail, FileText, Github, Wrench, Clock, Download } from 'lucide-react'

interface CommandItem {
  id: string
  name: string
  shortcut: string
  icon: React.ElementType
  action: () => void
  category: string
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const commands: CommandItem[] = [
    {
      id: 'home',
      name: 'Home',
      shortcut: 'h',
      icon: Home,
      action: () => router.push('/'),
      category: 'Navigation'
    },
    {
      id: 'about',
      name: 'About Me',
      shortcut: 'a',
      icon: User,
      action: () => router.push('/about'),
      category: 'Navigation'
    },
    {
      id: 'projects',
      name: 'View Projects',
      shortcut: 'p',
      icon: FolderOpen,
      action: () => router.push('/#projects'),
      category: 'Navigation'
    },
    {
      id: 'uses',
      name: 'My Setup',
      shortcut: 'u',
      icon: Wrench,
      action: () => router.push('/uses'),
      category: 'Navigation'
    },
    {
      id: 'now',
      name: "What I'm Doing Now",
      shortcut: 'n',
      icon: Clock,
      action: () => router.push('/now'),
      category: 'Navigation'
    },
    {
      id: 'contact',
      name: 'Contact',
      shortcut: 'c',
      icon: Mail,
      action: () => router.push('/contact'),
      category: 'Navigation'
    },
    {
      id: 'resume',
      name: 'View Resume',
      shortcut: 'r',
      icon: Download,
      action: () => window.open('/MyResume2025.pdf', '_blank'),
      category: 'Actions'
    },
    {
      id: 'github',
      name: 'GitHub Profile',
      shortcut: 'g',
      icon: Github,
      action: () => window.open('https://github.com/jacobsmxth'),
      category: 'Social'
    },
    {
      id: 'copy-email',
      name: 'Copy Work Email',
      shortcut: 'e',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText('jacobsmith@jsmitty.com')
        setIsOpen(false)
      },
      category: 'Actions'
    }
  ]

  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cmd.shortcut.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) {
      acc[cmd.category] = []
    }
    acc[cmd.category].push(cmd)
    return acc
  }, {} as Record<string, CommandItem[]>)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((open) => !open)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  useEffect(() => {
    if (isOpen) {
      setSearchQuery('')
    }
  }, [isOpen])

  const handleCommand = (command: CommandItem) => {
    command.action()
    setIsOpen(false)
  }

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-30 group"
        aria-label="Open command palette"
      >
        <Command className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </motion.button>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-white rounded-3xl shadow-2xl z-50 overflow-hidden"
            >
              {/* Search Input */}
              <div className="p-6 border-b border-slate-200 flex items-center gap-4">
                <Search className="w-6 h-6 text-slate-400" />
                <input
                  type="text"
                  placeholder="Type a command or search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-lg outline-none text-slate-800 placeholder:text-slate-400"
                  autoFocus
                />
                <kbd className="px-3 py-1 bg-slate-100 rounded-lg text-sm text-slate-600 font-mono">
                  ESC
                </kbd>
              </div>

              {/* Commands List */}
              <div className="max-h-[400px] overflow-y-auto p-4">
                {Object.entries(groupedCommands).map(([category, items]) => (
                  <div key={category} className="mb-6 last:mb-0">
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">
                      {category}
                    </h3>
                    <div className="space-y-1">
                      {items.map((cmd) => {
                        const Icon = cmd.icon
                        return (
                          <button
                            key={cmd.id}
                            onClick={() => handleCommand(cmd)}
                            className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-slate-50 transition-colors group text-left"
                          >
                            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <span className="flex-1 text-slate-800 font-medium">
                              {cmd.name}
                            </span>
                            <kbd className="px-3 py-1 bg-slate-100 rounded-lg text-sm text-slate-600 font-mono">
                              {cmd.shortcut}
                            </kbd>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}

                {filteredCommands.length === 0 && (
                  <div className="text-center py-12 text-slate-400">
                    No commands found
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2">
                    <kbd className="px-2 py-1 bg-white rounded border border-slate-200">⌘</kbd>
                    <kbd className="px-2 py-1 bg-white rounded border border-slate-200">K</kbd>
                    <span>to toggle</span>
                  </span>
                </div>
                <span>Navigate with keyboard</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
