'use client';

import React from 'react';
import { motion } from 'framer-motion';

type CardVariant = 'default' | 'glass' | 'elevated' | 'outline' | 'colored';
type CardSize = 'sm' | 'md' | 'lg';

interface CardProps {
  variant?: CardVariant;
  size?: CardSize;
  className?: string;
  children: React.ReactNode;
  animate?: boolean;
  hoverEffect?: boolean;
  onClick?: () => void;
}

interface CardComponent extends React.FC<CardProps> {
  Header: React.FC<CardSubComponentProps>;
  Title: React.FC<CardSubComponentProps>;
  Description: React.FC<CardSubComponentProps>;
  Content: React.FC<CardSubComponentProps>;
  Footer: React.FC<CardSubComponentProps>;
}

interface CardSubComponentProps {
  className?: string;
  children: React.ReactNode;
}

const Card: CardComponent = ({
  variant = 'default',
  size = 'md',
  className = '',
  children,
  animate = false,
  hoverEffect = false,
  onClick,
}) => {
  const baseStyles = 'rounded-xl overflow-hidden relative';
  
  const variantStyles = {
    default: 'bg-white/5 border border-white/5',
    glass: 'glass',
    elevated: 'bg-neutral-900 shadow-xl border border-neutral-800',
    outline: 'border border-neutral-700 bg-transparent',
    colored: 'bg-gradient-to-br from-red-500/10 to-purple-500/10 border border-white/5',
  };
  
  const sizeStyles = {
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };

  const hoverStyles = hoverEffect 
    ? 'transition-all hover:scale-[1.02] hover:shadow-xl cursor-pointer' 
    : '';
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${hoverStyles} ${className}`;

  const cardContent = (
    <div className={combinedClassName} onClick={onClick}>
      {children}
    </div>
  );

  // If animation is enabled, wrap with motion component
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
};

// Specialized sub-components with display names
const Header: React.FC<CardSubComponentProps> = ({ className = '', children }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);
Header.displayName = 'Card.Header';

const Title: React.FC<CardSubComponentProps> = ({ className = '', children }) => (
  <h3 className={`text-xl font-bold mb-1 ${className}`}>
    {children}
  </h3>
);
Title.displayName = 'Card.Title';

const Description: React.FC<CardSubComponentProps> = ({ className = '', children }) => (
  <p className={`text-gray-400 text-sm ${className}`}>
    {children}
  </p>
);
Description.displayName = 'Card.Description';

const Content: React.FC<CardSubComponentProps> = ({ className = '', children }) => (
  <div className={`my-4 ${className}`}>
    {children}
  </div>
);
Content.displayName = 'Card.Content';

const Footer: React.FC<CardSubComponentProps> = ({ className = '', children }) => (
  <div className={`mt-4 pt-4 border-t border-white/5 flex justify-end items-center gap-4 ${className}`}>
    {children}
  </div>
);
Footer.displayName = 'Card.Footer';

// Assign the components to Card
Card.Header = Header;
Card.Title = Title;
Card.Description = Description;
Card.Content = Content;
Card.Footer = Footer;

export default Card; 