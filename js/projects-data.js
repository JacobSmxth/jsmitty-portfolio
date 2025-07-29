// Projects Data for Portfolio
const projectsData = [
  {
    id: 'goatrewards',
    title: 'GoatRewards',
    subtitle: 'Community Leaderboard Platform',
    description: 'A dynamic leaderboard platform for streamers and their communities. Features real-time scoring, user rankings, and interactive community engagement tools.',
    image: null,
    technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Database'],
    category: 'Web Development',
    featured: true,
    links: {
      github: null,
      demo: 'https://goatrewards.com'
    },
    stats: {
      stars: 0,
      forks: 0,
      language: 'JavaScript'
    },
    highlights: [
      'Real-time leaderboard updates',
      'Community engagement features',
      'Responsive design for all devices',
      'Custom scoring system implementation'
    ],
    codeSnippet: null,
    status: 'Live',
    lastUpdated: '2025-01-25'
  },
  {
    id: 'dotfiles',
    title: 'Dotfiles',
    subtitle: 'Custom Linux Configuration',
    description: 'Fully modular and pywal-themed dotfiles configuration featuring Hyprland, Neovim, Zsh, and Waybar. A complete desktop environment setup optimized for development workflow.',
    image: null,
    technologies: ['Linux', 'Hyprland', 'Neovim', 'Zsh', 'Waybar', 'Python'],
    category: 'Development Environment',
    featured: true,
    links: {
      github: 'https://github.com/jacobsmxth/dotfiles',
      demo: null
    },
    stats: {
      stars: 0,
      forks: 0,
      language: 'Shell'
    },
    highlights: [
      'Hyprland wayland compositor configuration',
      'Neovim setup with LSP and modern plugins',
      'Zsh with custom prompt and aliases',
      'Automated theming with pywal integration'
    ],
    codeSnippet: `# Hyprland configuration snippet
bind = SUPER, Return, exec, kitty
bind = SUPER, Q, killactive
bind = SUPER, M, exit
bind = SUPER, E, exec, thunar
bind = SUPER, V, togglefloating
bind = SUPER, R, exec, wofi --show drun

# Window management
bind = SUPER, 1, workspace, 1
bind = SUPER, 2, workspace, 2
bind = SUPER, 3, workspace, 3`,
    status: 'Maintained',
    lastUpdated: '2025-01-20'
  },
  {
    id: 'learning-lab',
    title: 'Learning Lab',
    subtitle: 'Consolidated Learning Archive',
    description: 'A comprehensive learning archive across C, Go, and systems tooling fundamentals. This repository serves as my knowledge base for systems programming concepts, algorithms, and low-level development practices.',
    image: null,
    technologies: ['C', 'Go', 'Assembly', 'Systems Programming', 'Algorithms'],
    category: 'Systems Programming',
    featured: true,
    links: {
      github: 'https://github.com/jacobsmxth/learning-lab',
      demo: null
    },
    stats: {
      stars: 0,
      forks: 0,
      language: 'C'
    },
    highlights: [
      'Memory management and pointer manipulation in C',
      'Low-level systems programming concepts',
      'Algorithm implementations and analysis',
      'Cross-platform development practices'
    ],
    codeSnippet: `// Example from learning-lab
#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

Node* createNode(int data) {
    Node* newNode = malloc(sizeof(Node));
    if (newNode) {
        newNode->data = data;
        newNode->next = NULL;
    }
    return newNode;
}`,
    status: 'Active Development',
    lastUpdated: '2025-01-15'
  },
  {
    id: 'portfolio-v2',
    title: 'Portfolio Website',
    subtitle: 'Personal Developer Portfolio',
    description: 'This cyberpunk-themed portfolio website built with vanilla HTML, CSS, and JavaScript. Features interactive animations, matrix rain effects, and responsive design showcasing my journey in systems programming.',
    image: null,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'Web Animations'],
    category: 'Web Development',
    featured: true,
    links: {
      github: 'https://github.com/jacobsmxth/jsmitty.com',
      demo: 'https://jsmitty.com'
    },
    stats: {
      stars: 0,
      forks: 0,
      language: 'JavaScript'
    },
    highlights: [
      'Interactive matrix rain background effect',
      'Cyberpunk-themed UI with neon accents',
      'Responsive design with smooth animations',
      'Performance-optimized particle systems'
    ],
    codeSnippet: `// Matrix rain effect implementation
class MatrixRain {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.characters = 'アァカサタナハマヤャラワ01';
    this.drops = [];
    this.init();
  }
  
  draw() {
    this.ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    // ... matrix animation logic
  }
}`,
    status: 'Live',
    lastUpdated: '2025-01-29'
  },
  {
    id: 'systems-projects',
    title: 'Systems Programming Collection',
    subtitle: 'Low-level Development Projects',
    description: 'A collection of systems programming projects including memory allocators, simple operating system components, and network protocol implementations. Focus on understanding computer internals.',
    image: '/assets/projects/systems.png',
    technologies: ['C', 'Assembly', 'Linux Kernel', 'Network Programming', 'Memory Management'],
    category: 'Systems Programming',
    featured: false,
    links: {
      github: 'https://github.com/jacobsmxth/systems-projects',
      demo: null
    },
    stats: {
      stars: 0,
      forks: 0,
      language: 'C'
    },
    highlights: [
      'Custom memory allocator implementation',
      'Basic shell with process management',
      'TCP/UDP socket programming examples',
      'File system utilities and tools'
    ],
    codeSnippet: `// Simple memory allocator
typedef struct block {
    size_t size;
    int free;
    struct block *next;
} block_t;

void* my_malloc(size_t size) {
    block_t *block = find_free_block(size);
    if (!block) {
        block = request_space(size);
    }
    return block ? (block + 1) : NULL;
}`,
    status: 'In Progress',
    lastUpdated: '2025-01-10'
  },
  {
    id: 'cybersecurity-tools',
    title: 'Cybersecurity Toolkit',
    subtitle: 'Security Analysis Tools',
    description: 'Educational cybersecurity tools and scripts developed during coursework. Includes network scanners, vulnerability assessment scripts, and cryptographic implementations for learning purposes.',
    image: '/assets/projects/security.png',
    technologies: ['Python', 'Bash', 'Nmap', 'Wireshark', 'Cryptography'],
    category: 'Cybersecurity',
    featured: false,
    links: {
      github: 'https://github.com/jacobsmxth/cybersecurity-toolkit',
      demo: null
    },
    stats: {
      stars: 0,
      forks: 0,
      language: 'Python'
    },
    highlights: [
      'Network reconnaissance tools',
      'Vulnerability scanning automation',
      'Cryptographic algorithm implementations',
      'Log analysis and monitoring scripts'
    ],
    codeSnippet: `#!/usr/bin/env python3
import socket
import threading

def port_scan(target, port):
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        result = sock.connect_ex((target, port))
        if result == 0:
            print(f"Port {port}: Open")
        sock.close()
    except Exception as e:
        pass`,
    status: 'Educational',
    lastUpdated: '2024-12-15'
  },
  {
    id: 'code-ninjas-projects',
    title: 'Code Ninjas Teaching Projects',
    subtitle: 'Educational Game Development',
    description: 'Collection of educational projects and games developed for teaching programming concepts to students at Code Ninjas. Includes block-based programming examples and JavaScript fundamentals.',
    image: '/assets/projects/code-ninjas.png',
    technologies: ['JavaScript', 'Scratch', 'HTML5 Canvas', 'Game Development', 'Educational Tools'],
    category: 'Education',
    featured: false,
    links: {
      github: 'https://github.com/jacobsmxth/code-ninjas-projects',
      demo: null
    },
    stats: {
      stars: 0,
      forks: 0,
      language: 'JavaScript'
    },
    highlights: [
      'Interactive coding exercises for students',
      'Game-based learning implementations',
      'Block programming to text code transitions',
      'Debugging and problem-solving tutorials'
    ],
    codeSnippet: `// Simple game loop for teaching
class Game {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.player = { x: 50, y: 50, size: 20 };
    this.gameLoop();
  }
  
  update() {
    // Game logic here
    this.handleInput();
    this.updatePlayer();
  }
  
  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawPlayer();
  }
}`,
    status: 'Teaching Resource',
    lastUpdated: '2025-01-25'
  }
];

// Project categories for filtering
const projectCategories = [
  'All',
  'Systems Programming',
  'Web Development',
  'Cybersecurity',
  'Development Environment',
  'Education'
];

// Featured projects (for hero section or highlights)
const featuredProjects = projectsData.filter(project => project.featured);

// Utility functions for project data
const ProjectUtils = {
  // Get project by ID
  getProjectById: (id) => {
    return projectsData.find(project => project.id === id);
  },
  
  // Get projects by category
  getProjectsByCategory: (category) => {
    if (category === 'All') return projectsData;
    return projectsData.filter(project => project.category === category);
  },
  
  // Get projects by technology
  getProjectsByTechnology: (tech) => {
    return projectsData.filter(project => 
      project.technologies.some(t => t.toLowerCase().includes(tech.toLowerCase()))
    );
  },
  
  // Get recent projects
  getRecentProjects: (limit = 3) => {
    return projectsData
      .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
      .slice(0, limit);
  },
  
  // Search projects
  searchProjects: (query) => {
    const searchTerm = query.toLowerCase();
    return projectsData.filter(project => 
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
    );
  },
  
  // Get project statistics
  getProjectStats: () => {
    const totalProjects = projectsData.length;
    const categories = [...new Set(projectsData.map(p => p.category))];
    const technologies = [...new Set(projectsData.flatMap(p => p.technologies))];
    
    return {
      totalProjects,
      categories: categories.length,
      technologies: technologies.length,
      featuredProjects: featuredProjects.length
    };
  }
};

// GitHub API integration for live data
class GitHubProjectSync {
  constructor(username = 'jacobsmxth') {
    this.username = username;
    this.apiBase = 'https://api.github.com';
  }
  
  async fetchRepositories() {
    try {
      const response = await fetch(`${this.apiBase}/users/${this.username}/repos?sort=updated&per_page=10`);
      if (!response.ok) throw new Error('Failed to fetch repositories');
      
      const repos = await response.json();
      return repos.map(repo => ({
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updated: repo.updated_at,
        url: repo.html_url
      }));
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      return [];
    }
  }
  
  async updateProjectStats() {
    const repos = await this.fetchRepositories();
    
    // Update project data with live GitHub stats
    projectsData.forEach(project => {
      const repoName = project.links.github?.split('/').pop();
      const repo = repos.find(r => r.name === repoName);
      
      if (repo) {
        project.stats.stars = repo.stars;
        project.stats.forks = repo.forks;
        project.stats.language = repo.language || project.stats.language;
        project.lastUpdated = repo.updated.split('T')[0];
      }
    });
    
    return projectsData;
  }
}

// Export for use in other modules
window.projectsData = projectsData;
window.projectCategories = projectCategories;
window.featuredProjects = featuredProjects;
window.ProjectUtils = ProjectUtils;
window.GitHubProjectSync = GitHubProjectSync;

// Initialize GitHub sync if needed
document.addEventListener('DOMContentLoaded', () => {
  // Only sync in production or when explicitly requested
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    const githubSync = new GitHubProjectSync();
    githubSync.updateProjectStats().then(() => {
      console.log('Project stats updated from GitHub');
      // Trigger re-render of project components if needed
      window.dispatchEvent(new CustomEvent('projectsUpdated'));
    });
  }
});