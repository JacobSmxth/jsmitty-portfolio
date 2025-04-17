'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * AppStructure Component
 * 
 * A client component responsible for the overall page structure.
 * It conditionally renders the Header and Footer components based on the current route.
 * The Header and Footer are omitted on the landing page ('/').
 * Added smooth page transitions and background effects.
 */

export default function AppStructure({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Reset scroll position on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Floating decorative elements */}
      <div className="fixed top-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10" />
      <div className="fixed bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      
      {!isLandingPage && <Header />}
      <main className={`flex-grow ${isLoaded ? 'animate-float-up' : 'opacity-0'}`}>
        {children}
      </main>
      {!isLandingPage && <Footer />}
    </div>
  );
} 