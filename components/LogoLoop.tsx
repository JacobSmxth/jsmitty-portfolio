'use client'

import type { CSSProperties, ReactNode } from 'react'
import './LogoLoop.css'

interface LogoItem {
  node: ReactNode
  title?: string
  href?: string
}

interface LogoLoopProps {
  logos: LogoItem[]
  speed?: number
  gap?: number
  pauseOnHover?: boolean
  ariaLabel?: string
  className?: string
}

export default function LogoLoop({
  logos,
  speed = 30,
  gap = 48,
  pauseOnHover = true,
  ariaLabel = 'Technology logos',
  className
}: LogoLoopProps) {
  const containerClass = ['logoloop-simple', pauseOnHover && 'logoloop-simple--pause', className]
    .filter(Boolean)
    .join(' ')

  const style = {
    '--logoloop-gap': `${gap}px`,
    '--logoloop-duration': `${speed}s`,
  } as CSSProperties

  const renderLogos = (copyIndex: number) => (
    <div className="logoloop-row" aria-hidden={copyIndex > 0}>
      {logos.map((item, index) => {
        const content = (
          <span className="logoloop-node" aria-hidden={!!item.href}>
            {item.node}
          </span>
        )

        return (
          <div className="logoloop-item" key={`${copyIndex}-${index}`}>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noreferrer noopener" aria-label={item.title || 'logo link'}>
                {content}
              </a>
            ) : (
              content
            )}
            {item.title && <span className="logoloop-label">{item.title}</span>}
          </div>
        )
      })}
    </div>
  )

  return (
    <div className={containerClass} style={style} role="region" aria-label={ariaLabel}>
      <div className="logoloop-track">
        {renderLogos(0)}
        {renderLogos(1)}
      </div>
    </div>
  )
}
