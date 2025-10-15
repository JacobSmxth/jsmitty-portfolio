'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const usesData = {
  development: {
    title: 'Development',
    items: [
      {
        name: 'IntelliJ IDEA',
        description: 'Primary IDE for Java development with Spring Boot',
        link: 'https://www.jetbrains.com/idea/'
      },
      {
        name: 'Neovim',
        description: 'Quick edits, config files, and non-Java development',
        link: 'https://neovim.io/'
      },
      {
        name: 'Postman',
        description: 'API testing and documentation',
        link: 'https://www.postman.com/'
      }
    ]
  },
  environment: {
    title: 'Environment',
    items: [
      {
        name: 'Arch Linux',
        description: 'Rolling release, always up to date',
        note: 'btw i use arch'
      },
      {
        name: 'Hyprland',
        description: 'Wayland compositor with smooth animations',
        link: 'https://hyprland.org/'
      },
      {
        name: 'Alacritty',
        description: 'GPU-accelerated terminal emulator',
        link: 'https://alacritty.org/'
      },
      {
        name: 'Zsh + Custom Config',
        description: 'Shell with custom aliases and functions'
      }
    ]
  },
  hardware: {
    title: 'Hardware',
    subsections: {
      workstation: {
        title: 'PC Specs',
        items: [
          'Intel Core i9-13900K (24 cores, 5.9 GHz)',
          'NVIDIA RTX 4080',
          '64 GB DDR4 RAM',
          '6TB NVMe Storage (WD Black SN850X + Samsung 990 EVO Plus + WD Blue SN580)'
        ]
      },
      monitors: {
        title: 'Display Setup',
        items: [
          'MSI Optix MAG342CQR - Main ultrawide',
          'Acer Predator 27" 240hz - Bottom for gaming',
          'NZXT F32Q - Left vertical for docs/chat'
        ]
      },
      peripherals: {
        title: 'Peripherals',
        items: [
          'Logitech MX Master 2 - Mouse',
          'Logitech G515 - Keyboard',
          'Blue Yeti - Microphone',
          'Sennheiser HD 560 S - Headphones',
          'Creative Pebble v2 - Speakers',
          'NZXT Switch Mix - Audio mixer'
        ]
      }
    }
  }
}

export default function Uses() {
  return (
    <main className="min-h-screen pt-40 pb-20 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 pb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
            My Setup
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The tools and hardware I use for development, productivity, and everything in between
          </p>
        </motion.div>

        {/* Neofetch-style System Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 bg-slate-900 text-green-400 p-6 rounded-2xl font-mono text-sm shadow-2xl overflow-x-auto"
        >
          <pre className="whitespace-pre">
{`$ neofetch
OS: Arch Linux x86_64
Kernel: 6.16.8-arch3-1
WM: Hyprland
Terminal: Alacritty
Shell: zsh
Editor: nvim
CPU: Intel i9-13900K (24) @ 5.900GHz
GPU: NVIDIA RTX 4080
Memory: 64GB DDR4`}
          </pre>
        </motion.div>

        {/* Development Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-slate-800">{usesData.development.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {usesData.development.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-800">{item.name}</h3>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Environment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-slate-800">{usesData.environment.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {usesData.environment.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-800">
                    {item.name}
                    {item.note && (
                      <span className="ml-2 text-xs text-blue-600 font-normal italic">
                        ({item.note})
                      </span>
                    )}
                  </h3>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hardware */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-slate-800">{usesData.hardware.title}</h2>

          {Object.entries(usesData.hardware.subsections).map(([key, subsection], sectionIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + sectionIndex * 0.1 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-slate-700">{subsection.title}</h3>
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100">
                <ul className="space-y-3">
                  {subsection.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start text-slate-700"
                    >
                      <span className="text-blue-600 mr-3">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-slate-500 text-sm"
        >
          <p>This page is inspired by <a href="https://uses.tech/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">/uses pages</a></p>
        </motion.div>
      </div>
    </main>
  )
}
