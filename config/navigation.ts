export interface NavLink {
  name: string
  path: string
}

export const navLinks: NavLink[] = [
  { name: 'About', path: '/about' },
  { name: 'Repos', path: '/repos' },
  { name: 'Uses', path: '/uses' },
  { name: 'Now', path: '/now' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]

export const footerQuickLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Experience', path: '/#timeline' },
  { name: 'Uses', path: '/uses' },
  { name: 'Now', path: '/now' },
]

export const footerServices: NavLink[] = [
  { name: 'Business Websites', path: '/services' },
  { name: 'Website Redesign', path: '/services' },
  { name: 'Web Applications', path: '/services' },
  { name: 'Maintenance & Hosting', path: '/services' },
]

export const socialLinks = {
  github: 'https://github.com/jacobsmxth',
  linkedin: 'https://linkedin.com/in/jacobsmxth',
  email: 'jacobsmith@jsmitty.com',
  personalEmail: 'jacob.d.smith@live.com',
}
