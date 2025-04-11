'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * AppStructure Component
 * 
 * A client component responsible for the overall page structure.
 * It conditionally renders the Header and Footer components based on the current route.
 * The Header and Footer are omitted on the landing page ('/').
 */

export default function AppStructure({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      {!isLandingPage && <Header />}
      <div className="flex-grow">
        {children}
      </div>
      {!isLandingPage && <Footer />}
    </div>
  );
} 