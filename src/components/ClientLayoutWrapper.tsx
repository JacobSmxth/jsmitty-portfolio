'use client';

import { useEffect, useState, useRef } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function ClientLayoutWrapper({ 
  children 
}: { 
  children: React.ReactNode 
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
    <>
      {isLoading && <LoadingSpinner />}
      <div 
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      >
        {children}
      </div>
    </>
  );
} 