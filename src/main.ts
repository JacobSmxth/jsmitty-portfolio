
interface Command {
  label: string;
  description: string;
  action: () => void;
  keywords: string[];
}

let selectedIndex: number = 0;
let filteredCommands: Command[] = [];

const commands: Command[] = [
  {
    label: 'View Resume',
    description: 'Open resume PDF',
    action: () => window.open('/JacobSmith_Apr2026.pdf', '_blank'),
    keywords: ['resume', 'cv', 'download', 'pdf']
  },
  {
    label: 'View Codeberg',
    description: 'Open Codeberg profile',
    action: () => window.open('https://codeberg.org/jsmitty', '_blank'),
    keywords: ['codeberg', 'git', 'code', 'repos', 'projects']
  },
  {
    label: 'View GitHub',
    description: 'Open GitHub profile',
    action: () => window.open('https://github.com/jacobsmxth', '_blank'),
    keywords: ['github', 'code', 'repos', 'projects']
  },
  {
    label: 'View LinkedIn',
    description: 'Open LinkedIn profile',
    action: () => window.open('https://linkedin.com/in/jacobsmxth', '_blank'),
    keywords: ['linkedin', 'professional', 'network']
  },
  {
    label: 'Open Discord',
    description: 'Open Discord profile',
    action: () => window.open('https://discordapp.com/users/518631054018609154', '_blank'),
    keywords: ['discord', 'profile', 'chat', 'contact']
  },
  {
    label: 'Send Email',
    description: 'Open email client',
    action: () => window.location.href = 'mailto:jacob.d.smith@live.com',
    keywords: ['email', 'contact', 'message']
  },
  {
    label: 'NinjaBux',
    description: 'Multi-tenant Code Ninjas reward platform',
    action: () => window.open('https://github.com/JacobSmxth/code-ninjas-bux', '_blank'),
    keywords: ['project', 'ninjabux', 'code ninjas', 'bux', 'spring boot', 'jwt', 'rbac']
  },
  {
    label: 'Jewels by Patty',
    description: 'Custom jewelry website with gallery and order flow',
    action: () => window.open('https://jewelsbypatty.com', '_blank'),
    keywords: ['project', 'jewels by patty', 'patty', 'astro', 'resend', 'netlify', 'client']
  },
  {
    label: 'C-CentLedger',
    description: 'Financial tracking CLI written in C',
    action: () => window.open('https://github.com/jacobsmxth', '_blank'),
    keywords: ['project', 'c', 'ledger', 'finance', 'dynamic array', 'memory']
  },
  {
    label: 'Hack the Box',
    description: 'Starting Point pentesting machines',
    action: () => window.open('https://app.hackthebox.com', '_blank'),
    keywords: ['project', 'htb', 'hack the box', 'pentesting', 'nmap', 'ctf']
  },
  {
    label: 'CentDash',
    description: 'View project on GitHub',
    action: () => window.open('https://github.com/jacobsmxth/centdash', '_blank'),
    keywords: ['project', 'centdash', 'finance', 'jpa']
  },
  {
    label: 'Inventory API',
    description: 'View project on GitHub',
    action: () => window.open('https://github.com/JacobSmxth/inventory-management-api', '_blank'),
    keywords: ['project', 'inventory', 'api', 'spring boot']
  },
  {
    label: 'Ichthys.nvim',
    description: 'View Neovim config on GitHub',
    action: () => window.open('https://github.com/JacobSmxth/Ichthys', '_blank'),
    keywords: ['project', 'neovim', 'config', 'vim']
  },
  {
    label: 'Copy Email',
    description: 'Copy email to clipboard',
    action: () => copyToClipboard('jacob.d.smith@live.com'),
    keywords: ['copy', 'email', 'clipboard']
  },
  {
    label: 'Stonepath.dev',
    description: 'Open Stonepath web agency',
    action: () => window.open('https://stonepath.dev', '_blank'),
    keywords: ['stonepath', 'agency', 'astro', 'web']
  },
  {
    label: 'Projects',
    description: 'Jump to featured projects',
    action: () => scrollToSection('projects'),
    keywords: ['projects', 'portfolio', 'work']
  },
  {
    label: 'Experience',
    description: 'Jump to work experience',
    action: () => scrollToSection('experience'),
    keywords: ['experience', 'work', 'jobs']
  },
  {
    label: 'Skills',
    description: 'Jump to skills',
    action: () => scrollToSection('skills'),
    keywords: ['skills', 'tech', 'stack', 'tools']
  }
];

const commandPalette: HTMLElement | null = document.getElementById('commandPalette');
const commandInput: HTMLInputElement | null = document.getElementById('commandInput') as HTMLInputElement;
const commandResults: HTMLElement | null = document.getElementById('commandResults');

function openCommandPalette(): void {
  if (commandPalette) {
    commandPalette.classList.add('active');
    if (commandInput) {
      commandInput.value = '';
      commandInput.focus();
      filterCommands('');
    }
  }
}

function closeCommandPalette(): void {
  if (commandPalette) {
    commandPalette.classList.remove('active');
  }
}

function filterCommands(query: string): void {
  const lowerQuery: string = query.toLowerCase();

  if (lowerQuery === '') {
    filteredCommands = commands;
  } else {
    filteredCommands = commands.filter(cmd =>
      cmd.label.toLowerCase().includes(lowerQuery) ||
      cmd.description.toLowerCase().includes(lowerQuery) ||
      cmd.keywords.some(keyword => keyword.includes(lowerQuery))
    );
  }

  selectedIndex = 0;
  renderCommands();
}

function renderCommands(): void {
  if (!commandResults) return;

  if (filteredCommands.length === 0) {
    commandResults.innerHTML = '<div class="command-palette__item"><div class="command-palette__item-label">No commands found</div></div>';
    return;
  }

  commandResults.innerHTML = filteredCommands.map((cmd, index) => `
    <div class="command-palette__item ${index === selectedIndex ? 'selected' : ''}" data-index="${index}">
      <div>
        <div class="command-palette__item-label">${escapeHtml(cmd.label)}</div>
        <div class="command-palette__item-description">${escapeHtml(cmd.description)}</div>
      </div>
      <div class="command-palette__item-key">↵</div>
    </div>
  `).join('');

  const items: NodeListOf<HTMLElement> = commandResults.querySelectorAll('.command-palette__item');
  items.forEach((item: HTMLElement) => {
    item.addEventListener('click', () => {
      const index: string | null = item.getAttribute('data-index');
      if (index !== null) {
        executeCommand(parseInt(index));
      }
    });
  });
}

function executeCommand(index: number): void {
  if (filteredCommands[index]) {
    filteredCommands[index].action();
    closeCommandPalette();
  }
}

function scrollToSection(id: string): void {
  const element: HTMLElement | null = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function escapeHtml(value: string): string {
  const element: HTMLDivElement = document.createElement('div');
  element.textContent = value;
  return element.innerHTML;
}

function copyToClipboard(text: string): void {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Copied to clipboard:', text);
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}

function handleKeyDown(e: KeyboardEvent): void {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    if (commandPalette?.classList.contains('active')) {
      closeCommandPalette();
    } else {
      openCommandPalette();
    }
    return;
  }

  if (!commandPalette?.classList.contains('active')) return;

  // Handle Tab separately before switch
  if (e.key === 'Tab') {
    e.preventDefault();
    e.stopPropagation();
    if (filteredCommands.length === 0) return;

    if (e.shiftKey) {
      selectedIndex = selectedIndex === 0 ? filteredCommands.length - 1 : selectedIndex - 1;
    } else {
      selectedIndex = (selectedIndex + 1) % filteredCommands.length;
    }
    renderCommands();
    return;
  }

  switch (e.key) {
    case 'Escape':
      e.preventDefault();
      closeCommandPalette();
      break;

    case 'ArrowDown':
      e.preventDefault();
      if (filteredCommands.length === 0) return;
      selectedIndex = (selectedIndex + 1) % filteredCommands.length;
      renderCommands();
      break;

    case 'ArrowUp':
      e.preventDefault();
      if (filteredCommands.length === 0) return;
      selectedIndex = selectedIndex === 0 ? filteredCommands.length - 1 : selectedIndex - 1;
      renderCommands();
      break;

    case 'Enter':
      e.preventDefault();
      executeCommand(selectedIndex);
      break;
  }
}

function init(): void {
  document.addEventListener('keydown', handleKeyDown);

  if (commandInput) {
    commandInput.addEventListener('input', (e: Event) => {
      const target: HTMLInputElement = e.target as HTMLInputElement;
      filterCommands(target.value);
    });
  }

  if (commandPalette) {
    commandPalette.addEventListener('click', (e: MouseEvent) => {
      if (e.target === commandPalette) {
        closeCommandPalette();
      }
    });
  }

  const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a[href^="#"]');
  links.forEach((link: HTMLAnchorElement) => {
    link.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const target: string | null = link.getAttribute('href');
      if (target) {
        const element: HTMLElement | null = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
