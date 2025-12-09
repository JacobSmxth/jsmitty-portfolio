'use client'

import { ExternalLink, Code2, Terminal, Cpu, Monitor, Maximize2, X } from 'lucide-react'
import { useState } from 'react'
import { GradientHeading } from '@/components/ui'
import { useBodyScrollLock } from '@/hooks'

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
          description: 'Fast edits, configs, and frontend work with my custom config Ichthys.nvim',
          link: 'https://github.com/jacobsmxth/ichthys'
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
  const [isFullscreen, setIsFullscreen] = useState(false)

  useBodyScrollLock(isFullscreen)

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <GradientHeading as="h1" className="text-5xl md:text-6xl font-bold mb-6 pb-2">
            What I Use
          </GradientHeading>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The software and hardware I rely on for backend development, security projects, and daily workflows.
          </p>
        </div>

        {/* Software Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-slate-800 flex items-center gap-3">
            <Code2 className="w-8 h-8 text-blue-600" />
            Software
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {usesData.software.map((section) => {
              const Icon = section.icon
              return (
                <div
                  key={section.category}
                  className="bg-white rounded-md p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all"
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
                </div>
              )
            })}
          </div>
        </div>

        {/* Hardware Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-slate-800 flex items-center gap-3">
            <Cpu className="w-8 h-8 text-purple-600" />
            Hardware
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Workstation Specs */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-md p-8 shadow-2xl text-white">
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
            </div>

            {/* Peripherals */}
            <div className="bg-white rounded-md p-8 shadow-lg border border-slate-100">
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
            </div>
          </div>
        </div>

        {/* Desk Setup Image */}
        <div className="mb-12">
          <div className="bg-white rounded-md p-8 shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              My Desk Setup
            </h3>
            <div
              className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => setIsFullscreen(true)}
            >
              <img
                src="/DeskSetup.png"
                alt="Desk Setup"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <Maximize2 className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen Modal */}
        {isFullscreen && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setIsFullscreen(false)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors"
              onClick={() => setIsFullscreen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src="/DeskSetup.png"
              alt="Desk Setup"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-slate-400 text-sm">
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
        </div>
      </div>
    </main>
  )
}
