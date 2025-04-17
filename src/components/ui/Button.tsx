'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  className?: string;
}

type ButtonProps = ButtonBaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>;

const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  href,
  external,
  fullWidth = false,
  className = '',
  children,
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles = 'relative font-medium rounded-md inline-flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500/50 disabled:opacity-60 disabled:pointer-events-none group';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white',
    secondary: 'bg-white/10 hover:bg-white/20 text-white',
    outline: 'border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white bg-transparent',
    ghost: 'bg-transparent hover:bg-white/5 text-gray-300 hover:text-white',
    link: 'bg-transparent text-red-400 hover:text-red-500 underline-offset-4 hover:underline p-0'
  };
  
  const sizeStyles = {
    sm: 'text-xs px-3 py-2 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5'
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;

  const content = (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-md">
          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}
      
      <span className={`flex items-center gap-2 ${isLoading ? 'opacity-0' : ''}`}>
        {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex-shrink-0 transition-transform group-hover:translate-x-0.5">{rightIcon}</span>}
      </span>
    </>
  );

  if (href) {
    return (
      <Link 
        href={href}
        className={combinedClassName}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </Link>
    );
  }

  // For normal buttons
  if (props.onClick) {
    return (
      <motion.button
        whileTap={{ scale: 0.98 }}
        className={combinedClassName}
        disabled={disabled || isLoading}
        onClick={props.onClick}
        type={props.type}
        form={props.form}
        name={props.name}
        value={props.value}
        id={props.id}
        title={props.title}
      >
        {content}
      </motion.button>
    );
  }

  // For buttons without animation
  return (
    <button
      className={combinedClassName}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button; 