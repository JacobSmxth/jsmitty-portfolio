'use client';

import { useEffect, useState } from 'react';
import { Inter } from "next/font/google";
import { usePathname } from 'next/navigation';
import LoadingSpinner from '@/components/LoadingSpinner';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Show loading spinner
    setIsLoading(true);

    // Hide loading spinner after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        {isLoading && <LoadingSpinner />}
        <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
