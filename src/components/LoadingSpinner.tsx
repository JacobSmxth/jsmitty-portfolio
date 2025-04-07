'use client';

import { useEffect, useState } from 'react';

export default function LoadingSpinner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-2 border-red-500/20 rounded-full animate-[spin_1.5s_linear_infinite]" />
        {/* Inner ring */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-r-2 border-red-500 rounded-full animate-[spin_1s_cubic-bezier(0.4,0,0.2,1)_infinite]" />
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>
    </div>
  );
} 