// Particle System for Cyberpunk Portfolio
class Particle {
  constructor(x, y, canvas) {
    this.x = x;
    this.y = y;
    this.canvas = canvas;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.radius = Math.random() * 3 + 1;
    this.opacity = Math.random() * 0.8 + 0.2;
    this.color = this.getRandomColor();
    this.connections = [];
    this.maxConnections = 3;
    this.connectionDistance = 120;
    this.life = 1.0;
    this.decay = Math.random() * 0.005 + 0.001;
  }
  
  getRandomColor() {
    const colors = [
      '#ff0040', // neon-red
      '#0080ff', // electric-blue
      '#ff4080', // hot-pink
      '#00ff80', // cyber-green
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  update() {
    // Update position
    this.x += this.vx;
    this.y += this.vy;
    
    // Bounce off edges
    if (this.x <= 0 || this.x >= this.canvas.width) {
      this.vx *= -1;
      this.x = Math.max(0, Math.min(this.canvas.width, this.x));
    }
    if (this.y <= 0 || this.y >= this.canvas.height) {
      this.vy *= -1;
      this.y = Math.max(0, Math.min(this.canvas.height, this.y));
    }
    
    // Update life
    this.life -= this.decay;
    this.opacity = this.life * 0.8;
  }
  
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 10;
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
  }
  
  drawConnections(ctx, particles) {
    this.connections = [];
    
    for (let i = 0; i < particles.length; i++) {
      const other = particles[i];
      if (other === this || this.connections.length >= this.maxConnections) break;
      
      const dx = this.x - other.x;
      const dy = this.y - other.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < this.connectionDistance) {
        this.connections.push(other);
        
        const opacity = (1 - distance / this.connectionDistance) * 0.3;
        
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 5;
        
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(other.x, other.y);
        ctx.stroke();
        
        ctx.restore();
      }
    }
  }
  
  isDead() {
    return this.life <= 0;
  }
}

// Interactive Particle that responds to mouse
class InteractiveParticle extends Particle {
  constructor(x, y, canvas) {
    super(x, y, canvas);
    this.originalRadius = this.radius;
    this.targetRadius = this.radius;
    this.mouseInfluence = 50;
    this.attractionForce = 0.02;
  }
  
  updateWithMouse(mouseX, mouseY) {
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < this.mouseInfluence) {
      // Attract to mouse
      this.vx += dx * this.attractionForce / distance;
      this.vy += dy * this.attractionForce / distance;
      
      // Grow when near mouse
      this.targetRadius = this.originalRadius * 2;
      this.opacity = Math.min(1, this.opacity + 0.02);
    } else {
      // Return to normal size
      this.targetRadius = this.originalRadius;
    }
    
    // Smooth radius transition
    this.radius += (this.targetRadius - this.radius) * 0.1;
    
    // Apply friction
    this.vx *= 0.98;
    this.vy *= 0.98;
    
    this.update();
  }
}

// Cyberpunk Particle System
class CyberpunkParticleSystem {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.maxParticles = 80;
    this.mouseX = 0;
    this.mouseY = 0;
    this.animationId = null;
    this.isRunning = false;
    
    this.setupCanvas();
    this.setupEventListeners();
    this.init();
  }
  
  setupCanvas() {
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '-1';
    this.container.appendChild(this.canvas);
    
    this.resizeCanvas();
  }
  
  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  setupEventListeners() {
    window.addEventListener('resize', () => {
      this.resizeCanvas();
    });
    
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
    
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.pause();
      } else {
        this.resume();
      }
    });
    
    // Add particles on click
    document.addEventListener('click', (e) => {
      this.addParticleAt(e.clientX, e.clientY);
    });
  }
  
  init() {
    this.particles = [];
    
    // Create initial particles
    for (let i = 0; i < this.maxParticles; i++) {
      this.addRandomParticle();
    }
    
    this.start();
  }
  
  addRandomParticle() {
    const x = Math.random() * this.canvas.width;
    const y = Math.random() * this.canvas.height;
    this.particles.push(new InteractiveParticle(x, y, this.canvas));
  }
  
  addParticleAt(x, y) {
    if (this.particles.length < this.maxParticles * 1.5) {
      // Create burst of particles
      for (let i = 0; i < 5; i++) {
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;
        this.particles.push(new InteractiveParticle(x + offsetX, y + offsetY, this.canvas));
      }
    }
  }
  
  update() {
    // Update particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];
      
      if (particle instanceof InteractiveParticle) {
        particle.updateWithMouse(this.mouseX, this.mouseY);
      } else {
        particle.update();
      }
      
      // Remove dead particles
      if (particle.isDead()) {
        this.particles.splice(i, 1);
      }
    }
    
    // Maintain particle count
    while (this.particles.length < this.maxParticles) {
      this.addRandomParticle();
    }
  }
  
  draw() {
    // Clear canvas with slight trail effect
    this.ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw connections first
    for (const particle of this.particles) {
      particle.drawConnections(this.ctx, this.particles);
    }
    
    // Draw particles
    for (const particle of this.particles) {
      particle.draw(this.ctx);
    }
    
    // Draw mouse glow
    this.drawMouseGlow();
  }
  
  drawMouseGlow() {
    const gradient = this.ctx.createRadialGradient(
      this.mouseX, this.mouseY, 0,
      this.mouseX, this.mouseY, 50
    );
    gradient.addColorStop(0, 'rgba(255, 0, 64, 0.1)');
    gradient.addColorStop(1, 'rgba(255, 0, 64, 0)');
    
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  
  animate() {
    if (!this.isRunning) return;
    
    this.update();
    this.draw();
    this.animationId = requestAnimationFrame(() => this.animate());
  }
  
  start() {
    this.isRunning = true;
    this.animate();
  }
  
  pause() {
    this.isRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
  
  resume() {
    if (!this.isRunning) {
      this.start();
    }
  }
  
  destroy() {
    this.pause();
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
  }
}

// DNA Helix Particle System
class DNAHelixParticles {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.time = 0;
    this.animationId = null;
    
    this.setupCanvas();
    this.init();
  }
  
  setupCanvas() {
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '-1';
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.container.appendChild(this.canvas);
  }
  
  init() {
    const centerX = this.canvas.width / 2;
    const helixHeight = this.canvas.height;
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
      const t = (i / particleCount) * Math.PI * 8;
      const y = (i / particleCount) * helixHeight;
      
      // Create two helixes
      this.particles.push({
        baseT: t,
        baseY: y,
        x: centerX + Math.cos(t) * 50,
        y: y,
        color: '#0080ff',
        radius: 2,
        helix: 1
      });
      
      this.particles.push({
        baseT: t + Math.PI,
        baseY: y,
        x: centerX + Math.cos(t + Math.PI) * 50,
        y: y,
        color: '#ff0040',
        radius: 2,
        helix: 2
      });
    }
    
    this.animate();
  }
  
  update() {
    this.time += 0.02;
    const centerX = this.canvas.width / 2;
    
    for (const particle of this.particles) {
      const t = particle.baseT + this.time;
      particle.x = centerX + Math.cos(t) * 50;
      
      // Add some wave motion
      particle.x += Math.sin(this.time + particle.baseY * 0.01) * 10;
    }
  }
  
  draw() {
    this.ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw connections between helixes
    for (let i = 0; i < this.particles.length; i += 2) {
      const p1 = this.particles[i];
      const p2 = this.particles[i + 1];
      
      if (p1 && p2) {
        this.ctx.strokeStyle = 'rgba(0, 255, 128, 0.3)';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.ctx.stroke();
      }
    }
    
    // Draw particles
    for (const particle of this.particles) {
      this.ctx.fillStyle = particle.color;
      this.ctx.shadowColor = particle.color;
      this.ctx.shadowBlur = 10;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }
  
  animate() {
    this.update();
    this.draw();
    this.animationId = requestAnimationFrame(() => this.animate());
  }
  
  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
  }
}

// Particle System Manager
class ParticleSystemManager {
  constructor() {
    this.currentSystem = null;
    this.systemTypes = {
      'cyberpunk': CyberpunkParticleSystem,
      'dna': DNAHelixParticles
    };
    this.currentType = 'cyberpunk';
  }
  
  init(containerId, type = 'cyberpunk') {
    this.destroy();
    
    if (this.systemTypes[type]) {
      this.currentSystem = new this.systemTypes[type](containerId);
      this.currentType = type;
    }
  }
  
  switchType(type) {
    if (this.systemTypes[type] && type !== this.currentType) {
      const container = this.currentSystem?.container;
      if (container) {
        this.init(container.id, type);
      }
    }
  }
  
  destroy() {
    if (this.currentSystem) {
      this.currentSystem.destroy();
      this.currentSystem = null;
    }
  }
  
  pause() {
    if (this.currentSystem && this.currentSystem.pause) {
      this.currentSystem.pause();
    }
  }
  
  resume() {
    if (this.currentSystem && this.currentSystem.resume) {
      this.currentSystem.resume();
    }
  }
}

// Export for use in main.js
window.ParticleSystemManager = ParticleSystemManager;
window.CyberpunkParticleSystem = CyberpunkParticleSystem;

// Auto-initialize if container exists
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('particles-container');
  if (container) {
    window.particleSystemManager = new ParticleSystemManager();
    window.particleSystemManager.init('particles-container', 'cyberpunk');
  }
});