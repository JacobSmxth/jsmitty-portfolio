import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Jacob Smith | Front End Web Developer",
  description: "Portfolio of Jacob Smith, a passionate front-end web developer specializing in React, Next.js, and modern web development. Creating responsive and engaging web experiences.",
  keywords: [
    "Jacob Smith",
    "Web Developer",
    "Front End Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
    "Portfolio",
    "UI/UX",
    "JavaScript",
    "Modern Web Development"
  ],
  authors: [{ name: "Jacob Smith" }],
  creator: "Jacob Smith",
  publisher: "Jacob Smith",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jsmitty.com',
    title: 'Jacob Smith | Front End Web Developer',
    description: 'Portfolio of Jacob Smith, a passionate front-end web developer specializing in React, Next.js, and modern web development.',
    siteName: 'Jacob Smith Portfolio',
    images: [
      {
        url: '/images/Me2.png', // Using your profile image as OG image
        width: 800,
        height: 800,
        alt: 'Jacob Smith - Front End Web Developer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacob Smith | Front End Web Developer',
    description: 'Front End Web Developer specializing in React and Next.js',
    images: ['/images/Me2.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'h7eDJ230VgqewjWKy6BGbHedBIcF_QYhNMVmsCpyT6w',
  },
  alternates: {
    canonical: 'https://jsmitty.com',
  },
  category: 'technology',
}; 