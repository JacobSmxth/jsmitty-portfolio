'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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