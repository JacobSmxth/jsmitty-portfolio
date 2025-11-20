import React from 'react';
import { LucideIcon } from 'lucide-react';
import { GradientHeading } from './GradientHeading';

interface SectionHeaderProps {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  centered?: boolean;
  gradientVariant?: 'default' | 'primary' | 'secondary';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon: Icon,
  title,
  subtitle,
  description,
  className = '',
  centered = false,
  gradientVariant = 'default'
}) => {
  const alignment = centered ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignment} mb-12 ${className}`}>
      {Icon && (
        <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white w-fit">
          <Icon className="w-6 h-6" />
        </div>
      )}

      {subtitle && (
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}

      <GradientHeading
        as="h2"
        variant={gradientVariant}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        {title}
      </GradientHeading>

      {description && (
        <p className={`text-slate-600 text-lg leading-relaxed ${centered ? 'max-w-2xl' : 'max-w-3xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

interface SimpleSectionHeaderProps {
  title: string;
  className?: string;
}

export const SimpleSectionHeader: React.FC<SimpleSectionHeaderProps> = ({
  title,
  className = ''
}) => {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-3xl font-bold text-slate-900 mb-2">
        {title}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
    </div>
  );
};
