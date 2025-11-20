import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  href: string;
  ariaLabel: string;
}

interface SocialLinksProps {
  variant?: 'default' | 'large' | 'minimal';
  className?: string;
  showLabels?: boolean;
  iconSize?: 'sm' | 'md' | 'lg';
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: <Github />,
    href: 'https://github.com/jacobsmxth',
    ariaLabel: 'Visit my GitHub profile'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin />,
    href: 'https://linkedin.com/in/jacobsmxth',
    ariaLabel: 'Connect with me on LinkedIn'
  },
  {
    name: 'Email',
    icon: <Mail />,
    href: 'mailto:jacobsmith@jsmitty.com',
    ariaLabel: 'Send me an email'
  }
];

const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6'
};

const variants = {
  default: {
    container: 'flex gap-4',
    link: 'flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200',
    iconWrapper: ''
  },
  large: {
    container: 'flex gap-6',
    link: 'flex flex-col items-center gap-2 p-4 rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1',
    iconWrapper: 'p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white'
  },
  minimal: {
    container: 'flex gap-3',
    link: 'text-slate-400 hover:text-slate-600 transition-colors duration-200',
    iconWrapper: ''
  }
};

export const SocialLinks: React.FC<SocialLinksProps> = ({
  variant = 'default',
  className = '',
  showLabels = false,
  iconSize = 'md'
}) => {
  const config = variants[variant];

  return (
    <div className={`${config.container} ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.ariaLabel}
          className={config.link}
        >
          {config.iconWrapper ? (
            <div className={config.iconWrapper}>
              {React.cloneElement(link.icon as React.ReactElement<{ className?: string }>, {
                className: iconSizes[iconSize]
              })}
            </div>
          ) : (
            React.cloneElement(link.icon as React.ReactElement<{ className?: string }>, {
              className: iconSizes[iconSize]
            })
          )}
          {(showLabels || variant === 'large') && (
            <span className="text-sm font-medium">{link.name}</span>
          )}
        </a>
      ))}
    </div>
  );
};

interface SocialLinkButtonProps {
  platform: 'github' | 'linkedin' | 'email';
  variant?: 'default' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const platformConfig = {
  github: {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/jacobsmxth',
    ariaLabel: 'Visit my GitHub profile'
  },
  linkedin: {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/jacobsmxth',
    ariaLabel: 'Connect with me on LinkedIn'
  },
  email: {
    name: 'Email',
    icon: Mail,
    href: 'mailto:jacobsmith@jsmitty.com',
    ariaLabel: 'Send me an email'
  }
};

const buttonVariants = {
  default: 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50',
  gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
};

export const SocialLinkButton: React.FC<SocialLinkButtonProps> = ({
  platform,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const config = platformConfig[platform];
  const Icon = config.icon;

  return (
    <a
      href={config.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={config.ariaLabel}
      className={`inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`}
    >
      <Icon className="w-5 h-5" />
      {config.name}
    </a>
  );
};
