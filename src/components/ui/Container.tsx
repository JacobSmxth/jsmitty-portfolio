'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  centered?: boolean;
  animate?: boolean;
  id?: string;
  as?: React.ElementType;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
  centered = false,
  animate = false,
  id,
  as: Component = 'div',
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-5xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };
  
  const widthClass = sizes[size];
  const centeredClass = centered ? 'mx-auto' : '';
  const baseClass = 'w-full px-4 sm:px-6 md:px-8';
  
  const combinedClassName = `${baseClass} ${widthClass} ${centeredClass} ${className}`;

  const content = (
    <Component className={combinedClassName} id={id}>
      {children}
    </Component>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default Container; 