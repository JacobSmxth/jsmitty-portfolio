'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Code2, Terminal, Cpu, Monitor } from 'lucide-react'

const usesData = {
  software: [
    {
      category: 'Editor & IDE',
      icon: Code2,
      items: [
        {
          name: 'IntelliJ IDEA',
          description: 'Primary IDE for Java/Spring Boot backend development',
          link: 'https://www.jetbrains.com/idea/'
        },
        {
          name: 'Neovim',
          description: 'Fast edits, configs, and frontend work',
          link: 'https://neovim.io/'
        }
      ]
    },
    {
      category: 'Environment',
      icon: Terminal,
      items: [
        {
          name: 'Arch Linux',
          description: 'Rolling release, cutting-edge packages (btw)',
          link: 'https://archlinux.org/'
        },
        {
          name: 'Hyprland',
          description: 'Tiling Wayland compositor',
          link: 'https://hyprland.org/'
        },
        {
          name: 'Alacritty + Zsh',
          description: 'Fast terminal with custom shell config',
          link: 'https://alacritty.org/'
        }
      ]
    },
    {
      category: 'Tools',
      icon: Code2,
      items: [
        {
          name: 'Postman',
          description: 'API testing and documentation',
          link: 'https://www.postman.com/'
        },
        {
          name: 'Git',
          description: 'Version control (obviously)',
          link: 'https://git-scm.com/'
        }
      ]
    }
  ],
  hardware: {
    workstation: {
      title: 'Workstation',
      icon: Cpu,
      specs: [
        { label: 'CPU', value: 'Intel i9-13900K (24 cores, 5.9 GHz)' },
        { label: 'GPU', value: 'NVIDIA RTX 4080' },
        { label: 'RAM', value: '64GB DDR4' },
        { label: 'Storage', value: '6TB NVMe Total' }
      ],
      storage: [
        '2TB WD Black SN850X',
        '2TB Samsung 990 EVO Plus',
        '2TB WD Blue SN580'
      ]
    },
    peripherals: {
      title: 'Setup',
      icon: Monitor,
      items: [
        'MSI Optix MAG342CQR - Main ultrawide',
        '27" 144Hz Acer Monitor - Right for extra code, docs, or videos',
        'Acer Predator 27" 240Hz - Bottom for test environments, servers & Spotify',
        'NZXT F32Q - Left vertical for docs/chat',
        'Logitech G502 Hero / MX Master 2S - Mice (I switch between them)',
        'Logitech G515 - Keyboard',
        'Blue Yeti - Microphone',
        'Sennheiser HD 560 S - Headphones',
        'Creative Pebble v2 - Speakers',
        'NZXT Switch Mix - Audio mixer'
      ]
    }
  }
}

export default function Uses() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 pb-2 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
            What I Use
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The software and hardware I rely on for backend development, security projects, and daily workflows.
          </p>
        </motion.div>

        {/* Software Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-slate-800 flex items-center gap-3">
            <Code2 className="w-8 h-8 text-blue-600" />
            Software
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {usesData.software.map((section, sectionIdx) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + sectionIdx * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-bold text-slate-800">{section.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <div key={item.name} className="group">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="font-semibold text-slate-900">{item.name}</h4>
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-blue-600 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <p className="text-sm text-slate-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Hardware Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-slate-800 flex items-center gap-3">
            <Cpu className="w-8 h-8 text-purple-600" />
            Hardware
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Workstation Specs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-2xl text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold">Workstation</h3>
              </div>

              <div className="space-y-4 font-mono">
                {usesData.hardware.workstation.specs.map((spec, idx) => (
                  <div key={idx} className="pb-3 border-b border-slate-700">
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-slate-400 text-sm font-semibold">{spec.label}</span>
                      <span className="text-right text-white text-sm">{spec.value}</span>
                    </div>
                    {spec.label === 'Storage' && (
                      <ul className="mt-2 ml-4 space-y-1">
                        {usesData.hardware.workstation.storage.map((drive, driveIdx) => (
                          <li key={driveIdx} className="text-slate-400 text-xs flex items-start gap-2">
                            <span className="text-blue-400">→</span>
                            <span>{drive}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Peripherals */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <Monitor className="w-6 h-6 text-purple-600" />
                <h3 className="text-2xl font-bold text-slate-800">Setup</h3>
              </div>

              <ul className="space-y-3">
                {usesData.hardware.peripherals.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <span className="text-purple-600 mt-1">•</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-slate-400 text-sm"
        >
          <p>
            Inspired by{' '}
            <a
              href="https://uses.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              uses.tech
            </a>
          </p>
        </motion.div>
      </div>
    </main>
  )
}
