import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CommandPalette from '@/components/CommandPalette'

export const metadata: Metadata = {
  title: 'Jacob Smith | CS + Cybersecurity Student',
  description: 'Portfolio of Jacob Smith - Computer Science and Cybersecurity student focused on backend development and secure software design',
  keywords: ['Jacob Smith', 'Computer Science', 'Cybersecurity Student', 'Software Developer', 'Backend Development'],
  icons: {
    icon: '/assets/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  )
}
