// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(26, 26, 26, 0.98)';
    } else {
        nav.style.background = 'rgba(26, 26, 26, 0.95)';
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');

            // Animate skill bars when skills section comes into view
            if (entry.target.classList.contains('skills')) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 300);
                });
            }
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:jacobsmith@jsmitty.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form
    this.reset();

    // Show success message (you could replace this with a proper notification)
    alert('Email client opened! If it didn\'t open automatically, please send an email to jacobsmith@jsmitty.com');
});

// Typing effect for pagE title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

document.addEventListener('mousemove', (e) => {
    const webPattern = document.querySelector('.web-pattern');
    if (webPattern) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        webPattern.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    }
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const webPattern = document.querySelector('.web-pattern');

    if (hero && webPattern) {
        const rate = scrolled * -0.5;
        webPattern.style.transform = `translateY(${rate}px)`;
    }
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Project card tilt effect
// WHY DO I DO THIS TO SELF
// I HATE MATH
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        this.style.transform = 'translateY(-8px) rotateX(5deg)';
    });

    card.addEventListener('mouseleave', function(e) {
        this.style.transform = 'translateY(-8px) rotateX(0deg)';
    });

    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        this.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
});

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = `all 0.6s ease ${index * 0.2}s`;
    timelineObserver.observe(item);
});

// Enhanced contact item hover effects
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 8px 25px rgba(220, 38, 38, 0.2)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

// Just figured out I can do this. Wonder if anyone finds this
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);

    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showSpiderManQuote();
        konamiCode = [];
    }
});

function showSpiderManQuote() {
    const quotes = [
        "I believe there's a hero in all of us, that keeps us honest, gives us strength, makes us noble.",
        "You have a choice. You can either be Spider-Man, or you can be Peter Parker, but you can't be both.",
        "Not everyone is meant to make a difference. But for me, the choice to lead an ordinary life is no longer an option.",
        "Whatever life holds in store for me, I will never forget these words: With great power comes great responsibility."
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Create and show modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;

    const content = document.createElement('div');
    content.style.cssText = `
        background: var(--bg-secondary);
        padding: 40px;
        border-radius: 12px;
        max-width: 600px;
        text-align: center;
        border: 2px solid var(--accent-red);
        animation: slideIn 0.3s ease;
    `;

    content.innerHTML = `
        <h3 style="color: var(--accent-red); margin-bottom: 20px;">🕷️ Spider-Sense Activated!</h3>
        <p style="font-style: italic; font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;">"${randomQuote}"</p>
        <button onclick="this.closest('div').remove()" style="background: var(--accent-red); color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;">Thanks, Spider-Man!</button>
    `;

    modal.appendChild(content);
    document.body.appendChild(modal);

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideIn {
            from { transform: translateY(-50px) scale(0.8); }
            to { transform: translateY(0) scale(1); }
        }
    `;
    document.head.appendChild(style);
}
