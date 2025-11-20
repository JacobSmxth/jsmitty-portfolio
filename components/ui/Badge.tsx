import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variants = {
  default: 'bg-slate-100 text-slate-700',
  primary: 'bg-blue-100 text-blue-700',
  secondary: 'bg-purple-100 text-purple-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  danger: 'bg-red-100 text-red-700',
  info: 'bg-cyan-100 text-cyan-700',
  outline: 'border border-slate-300 text-slate-700'
};

const sizes = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-1',
  lg: 'text-base px-3 py-1.5'
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
};

interface TechBadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  children,
  icon,
  className = ''
}) => {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 ${className}`}>
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </span>
  );
};

interface StatusBadgeProps {
  status: 'in-progress' | 'completed' | 'planned' | 'active' | 'inactive';
  className?: string;
}

const statusConfig = {
  'in-progress': {
    color: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    label: 'In Progress'
  },
  'completed': {
    color: 'bg-green-100 text-green-700 border-green-200',
    label: 'Completed'
  },
  'planned': {
    color: 'bg-blue-100 text-blue-700 border-blue-200',
    label: 'Planned'
  },
  'active': {
    color: 'bg-green-100 text-green-700 border-green-200',
    label: 'Active'
  },
  'inactive': {
    color: 'bg-slate-100 text-slate-700 border-slate-200',
    label: 'Inactive'
  }
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  className = ''
}) => {
  const config = statusConfig[status];

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-medium border ${config.color} ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
      {config.label}
    </span>
  );
};

interface MetricBadgeProps {
  label: string;
  value: string | number;
  variant?: 'default' | 'success' | 'warning' | 'danger';
  className?: string;
}

const metricVariants = {
  default: 'bg-slate-100 text-slate-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  danger: 'bg-red-100 text-red-700'
};

export const MetricBadge: React.FC<MetricBadgeProps> = ({
  label,
  value,
  variant = 'default',
  className = ''
}) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${metricVariants[variant]} ${className}`}>
      <span className="text-xs font-medium opacity-75">{label}:</span>
      <span className="text-sm font-bold">{value}</span>
    </div>
  );
};
