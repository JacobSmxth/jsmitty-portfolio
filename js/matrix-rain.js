// Matrix Rain Effect
class MatrixRain {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.fontSize = 14;
    this.columns = 0;
    this.drops = [];
    this.animationId = null;
    
    this.init();
    this.setupEventListeners();
  }
  
  init() {
    this.resizeCanvas();
    this.initializeDrops();
    this.animate();
  }
  
  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.columns = Math.floor(this.canvas.width / this.fontSize);
    this.ctx.font = `${this.fontSize}px 'Fira Code', monospace`;
  }
  
  initializeDrops() {
    this.drops = [];
    for (let i = 0; i < this.columns; i++) {
      this.drops[i] = Math.random() * -100;
    }
  }
  
  setupEventListeners() {
    window.addEventListener('resize', () => {
      this.resizeCanvas();
      this.initializeDrops();
    });
    
    // Pause animation when page is not visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.pause();
      } else {
        this.resume();
      }
    });
  }
  
  draw() {
    // Create fade effect
    this.ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Set text color with glow effect
    this.ctx.fillStyle = '#00ff80';
    this.ctx.shadowColor = '#00ff80';
    this.ctx.shadowBlur = 10;
    
    // Draw characters
    for (let i = 0; i < this.drops.length; i++) {
      const character = this.characters[Math.floor(Math.random() * this.characters.length)];
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;
      
      this.ctx.fillText(character, x, y);
      
      // Reset drop when it goes off screen
      if (y > this.canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      
      // Move drop down
      this.drops[i]++;
    }
  }
  
  animate() {
    this.draw();
    this.animationId = requestAnimationFrame(() => this.animate());
  }
  
  pause() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
  
  resume() {
    if (!this.animationId) {
      this.animate();
    }
  }
  
  destroy() {
    this.pause();
    window.removeEventListener('resize', this.resizeCanvas);
    document.removeEventListener('visibilitychange', this.pause);
  }
}

// Enhanced Matrix Rain with Interactive Elements
class InteractiveMatrixRain extends MatrixRain {
  constructor(canvasId) {
    super(canvasId);
    this.mouseX = 0;
    this.mouseY = 0;
    this.ripples = [];
    this.setupMouseEvents();
  }
  
  setupMouseEvents() {
    this.canvas.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      
      // Create ripple effect
      this.createRipple(this.mouseX, this.mouseY);
    });
    
    this.canvas.addEventListener('click', (e) => {
      this.createRipple(e.clientX, e.clientY, true);
    });
  }
  
  createRipple(x, y, isClick = false) {
    this.ripples.push({
      x: x,
      y: y,
      radius: 0,
      maxRadius: isClick ? 100 : 50,
      alpha: 1,
      speed: isClick ? 3 : 1.5
    });
  }
  
  drawRipples() {
    this.ctx.save();
    
    for (let i = this.ripples.length - 1; i >= 0; i--) {
      const ripple = this.ripples[i];
      
      this.ctx.beginPath();
      this.ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
      this.ctx.strokeStyle = `rgba(0, 128, 255, ${ripple.alpha})`;
      this.ctx.lineWidth = 2;
      this.ctx.shadowColor = '#0080ff';
      this.ctx.shadowBlur = 10;
      this.ctx.stroke();
      
      ripple.radius += ripple.speed;
      ripple.alpha = 1 - (ripple.radius / ripple.maxRadius);
      
      if (ripple.radius >= ripple.maxRadius) {
        this.ripples.splice(i, 1);
      }
    }
    
    this.ctx.restore();
  }
  
  draw() {
    super.draw();
    this.drawRipples();
    this.drawMouseInfluence();
  }
  
  drawMouseInfluence() {
    // Create a subtle glow around mouse cursor
    const gradient = this.ctx.createRadialGradient(
      this.mouseX, this.mouseY, 0,
      this.mouseX, this.mouseY, 100
    );
    gradient.addColorStop(0, 'rgba(255, 0, 64, 0.1)');
    gradient.addColorStop(1, 'rgba(255, 0, 64, 0)');
    
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

// Binary Rain Variant
class BinaryRain extends MatrixRain {
  constructor(canvasId) {
    super(canvasId);
    this.characters = '01';
    this.colors = ['#00ff80', '#0080ff', '#ff0040'];
    this.colorIndex = 0;
  }
  
  draw() {
    // Create fade effect
    this.ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Cycle through colors
    this.colorIndex = (this.colorIndex + 0.01) % this.colors.length;
    const currentColor = this.colors[Math.floor(this.colorIndex)];
    
    this.ctx.fillStyle = currentColor;
    this.ctx.shadowColor = currentColor;
    this.ctx.shadowBlur = 15;
    
    // Draw binary characters
    for (let i = 0; i < this.drops.length; i++) {
      const character = this.characters[Math.floor(Math.random() * 2)];
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;
      
      // Add some randomness to character opacity
      this.ctx.globalAlpha = Math.random() * 0.8 + 0.2;
      this.ctx.fillText(character, x, y);
      this.ctx.globalAlpha = 1;
      
      if (y > this.canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      
      this.drops[i]++;
    }
  }
}

// Code Rain - Shows actual code snippets
class CodeRain extends MatrixRain {
  constructor(canvasId) {
    super(canvasId);
    this.codeSnippets = [
      '#include <stdio.h>',
      'int main() {',
      'printf("Hello");',
      'return 0;',
      '}',
      'func main() {',
      'fmt.Println("Go")',
      'const char* str',
      'malloc(sizeof(int))',
      'free(ptr);',
      'if (condition)',
      'for (int i = 0;',
      'while (true)',
      'struct Node {',
      'typedef struct',
      'void* pointer',
      'assembly code',
      'mov eax, ebx',
      'push ebp',
      'pop ebp',
      'jmp label',
      'call function'
    ];
    this.fontSize = 12;
  }
  
  draw() {
    this.ctx.fillStyle = 'rgba(10, 10, 10, 0.08)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.ctx.fillStyle = '#00ff80';
    this.ctx.shadowColor = '#00ff80';
    this.ctx.shadowBlur = 8;
    this.ctx.font = `${this.fontSize}px 'Fira Code', monospace`;
    
    for (let i = 0; i < this.drops.length; i++) {
      const snippet = this.codeSnippets[Math.floor(Math.random() * this.codeSnippets.length)];
      const x = i * this.fontSize * 8; // Wider spacing for code
      const y = this.drops[i] * this.fontSize;
      
      // Different colors for different types of code
      if (snippet.includes('#include') || snippet.includes('import')) {
        this.ctx.fillStyle = '#ff0040';
        this.ctx.shadowColor = '#ff0040';
      } else if (snippet.includes('int') || snippet.includes('char') || snippet.includes('void')) {
        this.ctx.fillStyle = '#0080ff';
        this.ctx.shadowColor = '#0080ff';
      } else {
        this.ctx.fillStyle = '#00ff80';
        this.ctx.shadowColor = '#00ff80';
      }
      
      this.ctx.fillText(snippet, x, y);
      
      if (y > this.canvas.height && Math.random() > 0.98) {
        this.drops[i] = 0;
      }
      
      this.drops[i] += 0.5; // Slower fall for readability
    }
  }
}

// Matrix Rain Manager
class MatrixRainManager {
  constructor() {
    this.currentRain = null;
    this.rainTypes = {
      'matrix': InteractiveMatrixRain,
      'binary': BinaryRain,
      'code': CodeRain
    };
    this.currentType = 'matrix';
  }
  
  init(canvasId, type = 'matrix') {
    this.destroy();
    
    if (this.rainTypes[type]) {
      this.currentRain = new this.rainTypes[type](canvasId);
      this.currentType = type;
    }
  }
  
  switchType(type) {
    if (this.rainTypes[type] && type !== this.currentType) {
      const canvas = this.currentRain?.canvas;
      if (canvas) {
        this.init(canvas.id, type);
      }
    }
  }
  
  destroy() {
    if (this.currentRain) {
      this.currentRain.destroy();
      this.currentRain = null;
    }
  }
  
  pause() {
    if (this.currentRain) {
      this.currentRain.pause();
    }
  }
  
  resume() {
    if (this.currentRain) {
      this.currentRain.resume();
    }
  }
}

// Performance Monitor
class MatrixPerformanceMonitor {
  constructor() {
    this.fps = 0;
    this.frameCount = 0;
    this.lastTime = performance.now();
    this.fpsDisplay = null;
  }
  
  update() {
    this.frameCount++;
    const currentTime = performance.now();
    
    if (currentTime - this.lastTime >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));
      this.frameCount = 0;
      this.lastTime = currentTime;
      
      if (this.fpsDisplay) {
        this.fpsDisplay.textContent = `FPS: ${this.fps}`;
      }
      
      // Auto-adjust quality based on performance
      if (this.fps < 30) {
        this.reduceQuality();
      } else if (this.fps > 50) {
        this.increaseQuality();
      }
    }
  }
  
  createFPSDisplay() {
    this.fpsDisplay = document.createElement('div');
    this.fpsDisplay.style.cssText = `
      position: fixed;
      top: 10px;
      left: 10px;
      color: #00ff80;
      font-family: 'Fira Code', monospace;
      font-size: 12px;
      z-index: 9999;
      background: rgba(0, 0, 0, 0.5);
      padding: 5px;
      border-radius: 3px;
      display: none;
    `;
    document.body.appendChild(this.fpsDisplay);
  }
  
  showFPS(show = true) {
    if (this.fpsDisplay) {
      this.fpsDisplay.style.display = show ? 'block' : 'none';
    }
  }
  
  reduceQuality() {
    // Implement quality reduction logic
    console.log('Reducing matrix rain quality for better performance');
  }
  
  increaseQuality() {
    // Implement quality increase logic
    console.log('Increasing matrix rain quality');
  }
}

// Export for use in main.js
window.MatrixRainManager = MatrixRainManager;
window.MatrixPerformanceMonitor = MatrixPerformanceMonitor;

// Auto-initialize if canvas exists
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('matrix-canvas');
  if (canvas) {
    window.matrixRainManager = new MatrixRainManager();
    window.matrixRainManager.init('matrix-canvas', 'matrix');
    
    // Initialize performance monitor in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      window.matrixPerformanceMonitor = new MatrixPerformanceMonitor();
      window.matrixPerformanceMonitor.createFPSDisplay();
      
      // Toggle FPS display with Ctrl+Shift+F
      document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'F') {
          const isVisible = window.matrixPerformanceMonitor.fpsDisplay.style.display !== 'none';
          window.matrixPerformanceMonitor.showFPS(!isVisible);
        }
      });
    }
  }
});