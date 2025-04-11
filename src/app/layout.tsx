import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';
import AppStructure from '@/components/AppStructure';
import "./globals.css";
import type { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Jacob Smith - Front End Web Developer',
  description: 'Portfolio of Jacob Smith, a front end web developer specializing in React, Next.js, and modern web technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png+xml" />
      </head>
      <body className={`${inter.className} overflow-x-hidden bg-black`}>
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
