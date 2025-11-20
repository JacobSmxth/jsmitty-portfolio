import React from 'react';

interface GradientHeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
}

const variants = {
  default: 'bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900',
  primary: 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600',
  secondary: 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600'
};

export const GradientHeading: React.FC<GradientHeadingProps> = ({
  children,
  as: Component = 'h2',
  className = '',
  variant = 'default'
}) => {
  return (
    <Component
      className={`${variants[variant]} bg-clip-text text-transparent ${className}`}
    >
      {children}
    </Component>
  );
};
