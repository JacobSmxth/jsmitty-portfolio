'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="relative flex items-center justify-center"
      >
        {/* Gradient glow effect */}
        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-red-500 to-purple-500 opacity-30 blur-xl animate-pulse" />
        
        {/* Outer ring */}
        <div className="w-20 h-20 border-2 border-neutral-800 rounded-full animate-[spin_3s_linear_infinite]">
          {/* Track dots */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-neutral-700"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '0 -8px',
                transform: `rotate(${i * 30}deg) translateY(-8px)`
              }}
            />
          ))}
        </div>
        
        {/* Middle ring */}
        <div className="absolute w-14 h-14 border-2 border-red-500/30 rounded-full animate-[spin_2s_ease-in-out_infinite_reverse]" />
        
        {/* Inner ring */}
        <div className="absolute w-8 h-8 border-2 border-t-red-500 border-r-red-500 border-b-transparent border-l-transparent rounded-full animate-[spin_1s_cubic-bezier(0.4,0,0.2,1)_infinite]" />
        
        {/* Center element */}
        <div className="absolute w-3 h-3 bg-gradient-animate rounded-full" />
      </motion.div>
      
      {/* Text */}
      <motion.div 
        className="absolute bottom-[40%] text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-neutral-400 text-sm">Loading experience</p>
        <div className="flex items-center justify-center gap-1 mt-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-[pulse_1s_ease-in-out_infinite]" />
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-[pulse_1s_ease-in-out_0.2s_infinite]" />
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-[pulse_1s_ease-in-out_0.4s_infinite]" />
        </div>
      </motion.div>
    </div>
  );
} 