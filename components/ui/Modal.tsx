import React from 'react';
import { X } from 'lucide-react';
import { IconButton } from './Button';
import { GradientHeading } from './GradientHeading';

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
  className?: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  onClose,
  className = ''
}) => {
  return (
    <div className={`flex justify-between items-start mb-6 ${className}`}>
      <GradientHeading as="h2" className="text-3xl font-bold">
        {title}
      </GradientHeading>
      <IconButton
        icon={X}
        onClick={onClose}
        variant="ghost"
        size="md"
        aria-label="Close modal"
        className="text-slate-400 hover:text-slate-600"
      />
    </div>
  );
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
}

const maxWidths = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '4xl': 'max-w-4xl'
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className = '',
  maxWidth = '2xl'
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-2xl shadow-2xl ${maxWidths[maxWidth]} w-full max-h-[90vh] overflow-y-auto ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

interface ModalContentProps {
  children: React.ReactNode;
  className?: string;
}

export const ModalContent: React.FC<ModalContentProps> = ({
  children,
  className = ''
}) => {
  return <div className={`p-8 ${className}`}>{children}</div>;
};

interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`flex justify-end gap-3 px-8 pb-8 ${className}`}>
      {children}
    </div>
  );
};

interface ModalSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const ModalSection: React.FC<ModalSectionProps> = ({
  title,
  children,
  className = ''
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      {title && (
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      )}
      {children}
    </div>
  );
};
