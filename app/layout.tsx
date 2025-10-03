import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Jacob Smith | Backend Engineer & Security Specialist',
  description: 'Portfolio of Jacob Smith - CS + Cybersecurity student specializing in secure fintech systems',
  keywords: ['Jacob Smith', 'Backend Engineer', 'Cybersecurity', 'Software Developer', 'Fintech'],
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
      </body>
    </html>
  )
}
