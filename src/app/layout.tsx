import { Inter } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';
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
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
          </div>
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
