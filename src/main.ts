
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
    action: () => window.open('MyResume2025.pdf', '_blank'),
    keywords: ['resume', 'cv', 'download', 'pdf']
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
    action: () => window.location.href = 'mailto:jacobsmith@jsmitty.com',
    keywords: ['email', 'contact', 'message']
  },
  {
    label: 'Code Ninjas Bux',
    description: 'View project on GitHub',
    action: () => window.open('https://github.com/JacobSmxth/code-ninjas-bux', '_blank'),
    keywords: ['project', 'code ninjas', 'bux', 'spring boot']
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
    label: 'Task Manager API',
    description: 'View project on GitHub',
    action: () => window.open('https://github.com/JacobSmxth/task-manager-api', '_blank'),
    keywords: ['project', 'task', 'api']
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
    action: () => copyToClipboard('jacobsmith@jsmitty.com'),
    keywords: ['copy', 'email', 'clipboard']
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
        <div class="command-palette__item-label">${cmd.label}</div>
        <div class="command-palette__item-description">${cmd.description}</div>
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
  const sections: { [key: string]: string } = {
    'projects': '.section:nth-of-type(1)',
    'experience': '.section:nth-of-type(4)',
    'tech': '.section:nth-of-type(4)'
  };

  const element: HTMLElement | null = document.querySelector(sections[id]);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
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
    if (e.shiftKey) {
      selectedIndex = Math.max(selectedIndex - 1, 0);
    } else {
      selectedIndex = Math.min(selectedIndex + 1, filteredCommands.length - 1);
      if (selectedIndex > filteredCommands.length - 1) {
        selectedIndex = 0;
      }
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
      selectedIndex = Math.min(selectedIndex + 1, filteredCommands.length - 1);
      renderCommands();
      break;

    case 'ArrowUp':
      e.preventDefault();
      selectedIndex = Math.max(selectedIndex - 1, 0);
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
