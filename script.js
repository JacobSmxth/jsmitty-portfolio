document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initMobileMenu();
    initSmoothScrolling();
    initScrollAnimations();
    initContactForm();
    initAccessibility();
});

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Highlight active nav item based on scroll position
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100; // Offset for fixed header
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
                mobileNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
}

// Mobile Menu Functions
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        // Animate hamburger icon to X shape
        const bars = document.querySelectorAll('.bar');
        if (mobileMenu.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }

        // Update accessibility attributes
        const isExpanded = mobileMenu.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
    }

    hamburger.addEventListener('click', toggleMobileMenu);

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target) && mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
}

function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed header height

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                history.pushState(null, null, targetId);
            }
        });
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger animation before element is fully visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.project-card, .experience-item, .skill-item, .contact-form');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('.submit-button');
    const formStatus = document.getElementById('formStatus');

    const EMAILJS_CONFIG = {
        serviceId: 'service_hfqimjb',
        templateId: 'template_pxqs8yg',
        publicKey: 'kQzspj8q1Zi3SQF2B'
    };

    if (typeof emailjs !== 'undefined') {
        try {
            emailjs.init(EMAILJS_CONFIG.publicKey);
            console.log('EmailJS initialized successfully');
        } catch (error) {
            console.error('EmailJS initialization failed:', error);
        }
    } else {
        console.warn('EmailJS library not loaded. Contact form will use fallback mode.');
    }

    function validateForm() {
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        const errors = [];

        if (name.length < 2) {
            errors.push('Name must be at least 2 characters long');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push('Please enter a valid email address');
        }

        if (subject.length < 3) {
            errors.push('Subject must be at least 3 characters long');
        }

        if (message.length < 5) {
            errors.push('Message must be at least 5 characters long');
        }

        return errors;
    }

    function showFormStatus(message, isSuccess = false) {
        formStatus.textContent = message;
        formStatus.className = `form-status ${isSuccess ? 'success' : 'error'}`;
        formStatus.style.display = 'block';

        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const errors = validateForm();
        if (errors.length > 0) {
            showFormStatus(errors.join('. '));
            return;
        }

        submitButton.disabled = true;
        submitButton.innerHTML = '<span>Sending...</span>';

        try {
            if (typeof emailjs === 'undefined') {
                console.error('EmailJS library not loaded');
                showFormStatus('Email service temporarily unavailable. Please contact me directly.');
                return;
            }

            const templateParams = {
                from_name: form.name.value.trim(),
                from_email: form.email.value.trim(),
                subject: form.subject.value.trim(),
                message: form.message.value.trim(),
                to_name: 'Jacob Smith'
            };

            console.log('Sending email with params:', templateParams);

            const result = await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                templateParams
            );

            console.log('EmailJS result:', result);

            if (result.status === 200) {
                showFormStatus('Message sent successfully! I\'ll get back to you soon.', true);
                form.reset();
            } else {
                console.error('EmailJS returned non-200 status:', result.status);
                throw new Error(`EmailJS returned status ${result.status}`);
            }

        } catch (error) {
            console.error('EmailJS error details:', error);

            let errorMessage = 'Failed to send message. ';

            if (error.message.includes('Invalid service id')) {
                errorMessage += 'Email service configuration issue.';
            } else if (error.message.includes('Invalid template id')) {
                errorMessage += 'Email template configuration issue.';
            } else if (error.message.includes('Invalid public key')) {
                errorMessage += 'Email authentication issue.';
            } else if (error.message.includes('CORS')) {
                errorMessage += 'Network connectivity issue.';
            } else {
                errorMessage += 'Please try again or contact me directly.';
            }

            showFormStatus(errorMessage);
        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = '<span class="button-text">Send Message</span><i class="fas fa-paper-plane"></i>';
        }
    });

    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.style.borderColor = '#E0E0E0';
            } else if (this.checkValidity()) {
                this.style.borderColor = '#28a745';
            } else {
                this.style.borderColor = '#dc3545';
            }
        });
    });
}

function initAccessibility() {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.setAttribute('aria-label', 'Toggle navigation menu');
        hamburger.setAttribute('aria-expanded', 'false');
    }


    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('alt')) {
            console.warn('Image missing alt attribute:', img.src);
        }
    });

    const mobileMenu = document.querySelector('.mobile-menu');
    const firstMobileLink = mobileMenu.querySelector('.mobile-nav-link');
    const lastMobileLink = mobileMenu.querySelector('.mobile-nav-link:last-child');

    document.addEventListener('keydown', (e) => {
        if (mobileMenu.classList.contains('active')) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstMobileLink) {
                        e.preventDefault();
                        hamburger.focus();
                    }
                } else {
                    if (document.activeElement === lastMobileLink) {
                        e.preventDefault();
                        hamburger.focus();
                    }
                }
            }
        }
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.addEventListener('scroll', debouncedScroll);

window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});
