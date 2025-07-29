// Main JavaScript for Cyberpunk Portfolio
class CyberpunkPortfolio {
  constructor() {
    this.currentTheme = 'cyberpunk';
    this.isLoading = true;
    this.scrollPosition = 0;
    this.activeSection = 'hero';
    this.projectsCarousel = null;
    this.skillsAnimated = false;
    
    this.init();
  }
  
  init() {
    this.setupEventListeners();
    this.initializeComponents();
    this.setupScrollEffects();
    this.setupNavigation();
    this.setupThemeToggle();
    this.setupTypedText();
    this.setupProjectsGrid();
    this.setupContactForm();
    this.setupSkillsAnimation();
    this.setupTimelineAnimation();
    
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
      });
    }
    
    this.isLoading = false;
    document.body.classList.add('loaded');
  }
  
  setupEventListeners() {
    // Window events
    window.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
    window.addEventListener('load', this.handleLoad.bind(this));
    
    // Keyboard shortcuts
    document.addEventListener('keydown', this.handleKeyboard.bind(this));
    
    // Custom events
    window.addEventListener('projectsUpdated', this.handleProjectsUpdate.bind(this));
  }
  
  initializeComponents() {
    // Initialize background effects
    this.initializeBackgroundEffects();
    
    // Setup intersection observer for sections
    this.setupIntersectionObserver();
    
    // Initialize tooltips
    this.initializeTooltips();
    
    // Setup smooth scrolling
    this.setupSmoothScrolling();
  }
  
  initializeBackgroundEffects() {
    // Matrix rain and particles are initialized in their respective files
    // This method can be used to control their behavior
    
    // Switch background effects based on section
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.updateBackgroundEffect(section.id);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(section);
    });
  }
  
  updateBackgroundEffect(sectionId) {
    if (window.matrixRainManager) {
      switch (sectionId) {
        case 'hero':
          window.matrixRainManager.switchType('matrix');
          break;
        case 'skills':
          window.matrixRainManager.switchType('binary');
          break;
        case 'projects':
          window.matrixRainManager.switchType('code');
          break;
        default:
          window.matrixRainManager.switchType('matrix');
      }
    }
  }
  
  setupScrollEffects() {
    // Parallax effects
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      parallaxElements.forEach(element => {
        element.style.transform = `translateY(${rate}px)`;
      });
    });
    
    // Header background on scroll
    const header = document.querySelector('.cyber-nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
  
  setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    // Smooth scroll to sections
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Close mobile menu if open
          navMenu.classList.remove('active');
        }
      });
    });
    
    // Mobile menu toggle
    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
      });
    }
    
    // Update active nav link on scroll
    this.updateActiveNavLink();
  }
  
  updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
          
          this.activeSection = sectionId;
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '-100px 0px -100px 0px'
    });
    
    sections.forEach(section => observer.observe(section));
  }
  
  setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        this.toggleTheme();
      });
    }
    
    // Load saved theme
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      this.setTheme(savedTheme);
    }
  }
  
  toggleTheme() {
    const newTheme = this.currentTheme === 'cyberpunk' ? 'ghost-protocol' : 'cyberpunk';
    this.setTheme(newTheme);
  }
  
  setTheme(theme) {
    this.currentTheme = theme;
    document.body.className = document.body.className.replace(/\w+-theme/g, '');
    document.body.classList.add(`${theme}-theme`);
    
    // Save theme preference
    localStorage.setItem('portfolio-theme', theme);
    
    // Update theme toggle state
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.classList.toggle('active', theme === 'ghost-protocol');
    }
    
    // Trigger theme change event
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }
  
  setupTypedText() {
    const typedElement = document.getElementById('hero-typed');
    
    if (typedElement && typeof Typed !== 'undefined') {
      new Typed('#hero-typed', {
        strings: [
          'Systems Programmer',
          'Cybersecurity Connoisseur',
          'Code Ninjas Sensei',
          'Education Content Creator',
          'Linux Enthusiast',
          'Problem Solver'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: false
      });
    }
  }
  
  setupProjectsGrid() {
    const projectsGrid = document.getElementById('projects-grid');
    const showMoreBtn = document.getElementById('show-more-projects');
    
    if (!projectsGrid || !window.projectsData) return;
    
    this.projectsGrid = new ProjectsGrid(projectsGrid, showMoreBtn);
  }
  
  setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', this.handleContactSubmit.bind(this));
    }
  }
  
  async handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = e.target.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="cyber-spinner"></span> Sending...';
    submitBtn.disabled = true;
    
    try {
      // Send email using EmailJS
      await this.sendEmailJS(data);
      
      // Show success message
      this.showToast('Message sent successfully!', 'success');
      e.target.reset();
      
      // Add terminal output
      this.addTerminalOutput('Message sent successfully. Thank you for reaching out!', 'success');
      
    } catch (error) {
      // Show error message
      this.showToast('Failed to send message. Please try again.', 'error');
      this.addTerminalOutput(`Error: ${error.message}`, 'error');
    } finally {
      // Reset button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  }
  
  async sendEmailJS(data) {
    // Check if EmailJS is loaded
    if (typeof emailjs === 'undefined') {
      throw new Error('EmailJS not loaded. Please check your internet connection.');
    }
    
    // Initialize EmailJS with your public key
    emailjs.init("kQzspj8q1Zi3SQF2B");
    
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: 'Jacob Smith'
    };
    
    try {
      const response = await emailjs.send(
        'service_hfqimjb', // Service ID
        'template_pxqs8yg', // Template ID
        templateParams
      );
      
      if (response.status === 200) {
        return response;
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw new Error('Failed to send message. Please try again later.');
    }
  }
  
  addTerminalOutput(message, type = 'info') {
    const terminalOutput = document.getElementById('terminal-output');
    if (!terminalOutput) return;
    
    const outputLine = document.createElement('div');
    outputLine.className = 'output-line';
    
    const timestamp = new Date().toLocaleTimeString();
    const className = type === 'success' ? 'success-msg' : type === 'error' ? 'error-msg' : 'system-msg';
    
    outputLine.innerHTML = `
      <span class="prompt">[${timestamp}]</span>
      <span class="${className}">${message}</span>
    `;
    
    terminalOutput.appendChild(outputLine);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
  
  setupSkillsAnimation() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.skillsAnimated) {
          this.animateSkillBars();
          this.skillsAnimated = true;
        }
      });
    }, { threshold: 0.5 });
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }
  }
  
  animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar, index) => {
      const progress = bar.getAttribute('data-progress');
      
      setTimeout(() => {
        bar.style.width = `${progress}%`;
      }, index * 200);
    });
  }
  
  setupTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => observer.observe(item));
  }
  
  setupIntersectionObserver() {
    // General intersection observer for animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => observer.observe(element));
  }
  
  initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip-content';
      tooltip.textContent = element.getAttribute('data-tooltip');
      element.appendChild(tooltip);
      element.classList.add('tooltip');
    });
  }
  
  setupSmoothScrolling() {
    // Enhanced smooth scrolling for better UX
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerHeight = document.querySelector('.cyber-nav').offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    toast.innerHTML = `
      <div class="toast-header">
        <span class="toast-title">${type.charAt(0).toUpperCase() + type.slice(1)}</span>
        <button class="toast-close">&times;</button>
      </div>
      <div class="toast-message">${message}</div>
    `;
    
    // Add to container or create one
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }
    
    toastContainer.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 5000);
    
    // Close button
    toast.querySelector('.toast-close').addEventListener('click', () => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    });
  }
  
  handleScroll() {
    this.scrollPosition = window.pageYOffset;
    
    // Update scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      scrollIndicator.style.opacity = this.scrollPosition > 100 ? '0' : '1';
    }
    
    // Parallax effects for floating code
    const floatingCode = document.querySelectorAll('.floating-code');
    floatingCode.forEach((element, index) => {
      const speed = 0.5 + (index * 0.2);
      element.style.transform = `translateY(${this.scrollPosition * speed}px)`;
    });
  }
  
  handleResize() {
    // Handle responsive changes
    if (window.matrixRainManager && window.matrixRainManager.currentRain) {
      window.matrixRainManager.currentRain.resizeCanvas();
    }
    
    if (window.particleSystemManager && window.particleSystemManager.currentSystem) {
      window.particleSystemManager.currentSystem.resizeCanvas?.();
    }
  }
  
  handleLoad() {
    // Page fully loaded
    document.body.classList.add('loaded');
    
    // Initialize any components that need full page load
    this.initializePostLoadComponents();
  }
  
  initializePostLoadComponents() {
    // Components that need to wait for full page load
    
    // Preload project images
    this.preloadProjectImages();
    
    // Initialize performance monitoring
    if (window.matrixPerformanceMonitor) {
      setInterval(() => {
        window.matrixPerformanceMonitor.update();
      }, 1000);
    }
  }
  
  preloadProjectImages() {
    if (window.projectsData) {
      window.projectsData.forEach(project => {
        if (project.image) {
          const img = new Image();
          img.src = project.image;
        }
      });
    }
  }
  
  handleKeyboard(e) {
    // Keyboard shortcuts
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'k':
          e.preventDefault();
          // Focus search or command palette
          break;
        case 't':
          e.preventDefault();
          this.toggleTheme();
          break;
      }
    }
    
    // Escape key actions
    if (e.key === 'Escape') {
      // Close any open modals
      const activeModal = document.querySelector('.modal-overlay.active');
      if (activeModal) {
        activeModal.classList.remove('active');
      }
      
      // Close mobile menu
      const navMenu = document.getElementById('nav-menu');
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    }
  }
  
  handleProjectsUpdate() {
    // Handle projects data update from GitHub API
    if (this.projectsGrid) {
      this.projectsGrid.updateProjects();
    }
  }
}

// Projects Grid Class
class ProjectsGrid {
  constructor(grid, showMoreBtn) {
    this.grid = grid;
    this.showMoreBtn = showMoreBtn;
    this.projects = window.projectsData || [];
    this.visibleCount = 3; // Show 3 projects initially
    this.maxVisible = this.projects.length;
    
    this.init();
  }
  
  init() {
    this.renderProjects();
    this.setupEventListeners();
  }
  
  renderProjects() {
    if (!this.projects.length) return;
    
    this.grid.innerHTML = '';
    
    // Show only visible projects
    const visibleProjects = this.projects.slice(0, this.visibleCount);
    
    visibleProjects.forEach((project, index) => {
      const projectCard = this.createProjectCard(project, index);
      this.grid.appendChild(projectCard);
    });
    
    // Show/hide "Show More" button
    if (this.visibleCount < this.maxVisible) {
      this.showMoreBtn.style.display = 'block';
    } else {
      this.showMoreBtn.style.display = 'none';
    }
  }
  
  createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-index', index);
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index * 200).toString());
    
    const imageSection = project.image ? `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <div class="project-overlay">
          <div class="overlay-content">
            <h3 class="overlay-title">${project.title}</h3>
            <div class="overlay-links">
              ${project.links.github ? `<a href="${project.links.github}" target="_blank" class="overlay-link">GitHub</a>` : ''}
              ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" class="overlay-link">Demo</a>` : ''}
            </div>
          </div>
        </div>
      </div>
    ` : `
      <div class="project-header">
        <div class="project-icon-large">
          ${this.getProjectIcon(project.category)}
        </div>
        <div class="project-links">
          ${project.links.github ? `<a href="${project.links.github}" target="_blank" class="project-link"><i class="fab fa-github"></i></a>` : ''}
          ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i></a>` : ''}
        </div>
      </div>
    `;
    
    card.innerHTML = `
      ${imageSection}
      <div class="project-content">
        <h3 class="project-title">
          <span class="project-icon">${this.getProjectIcon(project.category)}</span>
          ${project.title}
        </h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
        </div>
        <div class="project-stats">
          <div class="stat-item">
            <span class="stat-icon"><i class="fas fa-star"></i></span>
            <span>${project.stats.stars}</span>
          </div>
          <div class="stat-item">
            <span class="stat-icon"><i class="fas fa-code"></i></span>
            <span>${project.stats.language}</span>
          </div>
          <div class="stat-item">
            <span class="stat-icon"><i class="fas fa-calendar-alt"></i></span>
            <span>${project.lastUpdated}</span>
          </div>
        </div>
      </div>
    `;
    
    // Add click handler for modal
    card.addEventListener('click', () => this.openProjectModal(project));
    
    return card;
  }
  
  setupEventListeners() {
    if (this.showMoreBtn) {
      this.showMoreBtn.addEventListener('click', () => this.showMoreProjects());
    }
  }
  
  showMoreProjects() {
    this.visibleCount = this.maxVisible;
    this.renderProjects();
  }
  
  getProjectIcon(category) {
    const icons = {
      'Systems Programming': '⚙️',
      'Development Environment': '🛠️',
      'Web Development': '🌐',
      'Education': '📚',
      'Tools': '🔧',
      'Security': '🔒',
      'AI/ML': '🤖',
      'Blockchain': '⛓️'
    };
    return icons[category] || '🚀';
  }
  
  
  openProjectModal(project) {
    // Create and show project modal
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">${project.title}</h2>
          <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          ${project.image ? `<img src="${project.image}" alt="${project.title}" style="width: 100%; margin-bottom: 1rem;">` : ''}
          <p>${project.description}</p>
          <h4>Technologies:</h4>
          <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
          </div>
          <h4>Highlights:</h4>
          <ul>
            ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
          </ul>
          ${project.codeSnippet ? `
            <h4>Code Sample:</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">${project.stats.language}</span>
                <button class="code-copy">Copy</button>
              </div>
              <div class="code-content">
                <pre><code>${project.codeSnippet}</code></pre>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
    
    // Close modal events
    modal.querySelector('.modal-close').addEventListener('click', () => {
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    });
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
      }
    });
  }
  
  updateProjects() {
    this.projects = window.projectsData || [];
    this.maxVisible = this.projects.length;
    this.renderProjects();
  }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.cyberpunkPortfolio = new CyberpunkPortfolio();
});

// Export for external use
window.CyberpunkPortfolio = CyberpunkPortfolio;
window.ProjectsGrid = ProjectsGrid;