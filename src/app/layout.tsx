'use client';

import { useEffect, useState, useRef } from 'react';
import { Inter } from "next/font/google";
import LoadingSpinner from '@/components/LoadingSpinner';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (isInitialLoad.current) {
      // Only show loading spinner on initial page load
      const timer = setTimeout(() => {
        setIsLoading(false);
        isInitialLoad.current = false;
      }, 500); // 500ms duration

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png+xml" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {isLoading && <LoadingSpinner />}
        <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
