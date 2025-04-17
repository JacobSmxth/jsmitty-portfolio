import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';
import AppStructure from '@/components/AppStructure';
import "./globals.css";
import type { Metadata, Viewport } from 'next';

/**
 * Root Layout Component
 * 
 * Applies global styles, fonts, and wrappers to all routes.
 * Includes Vercel analytics and speed insights.
 * Uses AppStructure to conditionally render Header/Footer.
 * Uses ClientLayoutWrapper for potential client-side layout effects (like loading spinners).
 */

export const metadata: Metadata = {
  title: 'Jacob Smith - Front End Web Developer',
  description: 'Portfolio of Jacob Smith, a front end web developer specializing in React, Next.js, and modern web technologies.',
  keywords: 'frontend developer, web developer, react, next.js, javascript, typescript, portfolio',
  authors: [{ name: 'Jacob Smith' }],
  creator: 'Jacob Smith',
  publisher: 'Jacob Smith',
  openGraph: {
    type: 'website',
    title: 'Jacob Smith - Front End Web Developer',
    description: 'Portfolio of Jacob Smith, a front end web developer specializing in React, Next.js, and modern web technologies.',
    siteName: 'Jacob Smith Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacob Smith - Front End Web Developer',
    description: 'Portfolio of Jacob Smith, a front end web developer specializing in React, Next.js, and modern web technologies.',
  },
};

export const viewport: Viewport = {
  themeColor: '#141414',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png+xml" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body className="overflow-x-hidden bg-gray-500">
        <ClientLayoutWrapper>
          <AppStructure>
            {children}
          </AppStructure>
        </ClientLayoutWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
