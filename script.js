// ===================================
// JUDE Portfolio - Interactive Features
// ===================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollEffects();
  initScrollToTop();
  initSmoothScroll();
  initNavHighlight();
  initAnimationOnScroll();
});

// ===================================
// Mobile Menu Toggle
// ===================================
function initMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');

      // Toggle icon between bars and times
      const icon = mobileMenuToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  }
}

// ===================================
// Scroll Effects for Navbar
// ===================================
function initScrollEffects() {
  const navbar = document.getElementById('navbar');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

// ===================================
// Scroll to Top Button
// ===================================
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  if (scrollTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    // Scroll to top when clicked
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      // Skip if href is just "#"
      if (href === '#') return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const offsetTop = target.offsetTop - 80; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===================================
// Navigation Active State Highlight
// ===================================
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length === 0 || navLinks.length === 0) return;

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - 150) {
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
}

// ===================================
// Animation on Scroll (Intersection Observer)
// ===================================
function initAnimationOnScroll() {
  const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-fade-in-up');

  if (animatedElements.length === 0) return;

  // Set initial state
  animatedElements.forEach(el => {
    el.style.opacity = '0';
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

// ===================================
// Skill Bar Animation on Scroll
// ===================================
function initSkillBarAnimation() {
  const skillBars = document.querySelectorAll('.skill-bar');

  if (skillBars.length === 0) return;

  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.style.width || '0%';
        bar.style.width = '0%';

        setTimeout(() => {
          bar.style.width = width;
        }, 200);

        observer.unobserve(bar);
      }
    });
  }, observerOptions);

  skillBars.forEach(bar => {
    observer.observe(bar);
  });
}

// Initialize skill bar animation
document.addEventListener('DOMContentLoaded', () => {
  initSkillBarAnimation();
});

// ===================================
// Form Validation (if contact form is added later)
// ===================================
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ===================================
// Lazy Loading Images (if needed)
// ===================================
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');

  if (images.length === 0) return;

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => {
    imageObserver.observe(img);
  });
}

// ===================================
// Typing Effect for Hero Title (Optional Enhancement)
// ===================================
function initTypingEffect() {
  const typingElement = document.querySelector('[data-typing]');

  if (!typingElement) return;

  const text = typingElement.dataset.typing;
  const speed = parseInt(typingElement.dataset.speed) || 100;
  let index = 0;

  typingElement.textContent = '';

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  // Start typing after a short delay
  setTimeout(type, 500);
}

// ===================================
// Dark Mode Toggle (Optional Feature)
// ===================================
function initDarkModeToggle() {
  const darkModeToggle = document.getElementById('darkModeToggle');

  if (!darkModeToggle) return;

  // Check for saved preference
  const darkMode = localStorage.getItem('darkMode');

  if (darkMode === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
}

// ===================================
// Performance Monitoring
// ===================================
function logPerformance() {
  if (window.performance) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page load time: ${pageLoadTime}ms`);
  }
}

// Log performance on page load
window.addEventListener('load', () => {
  logPerformance();
});

// ===================================
// Parallax Effect for Hero (Optional)
// ===================================
function initParallax() {
  const heroSection = document.querySelector('.hero-section');

  if (!heroSection) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const parallaxSpeed = 0.5;

    heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
  });
}

// ===================================
// Console Welcome Message
// ===================================
console.log('%c👋 Welcome to JUDE\'s Portfolio!', 'color: #1B365D; font-size: 20px; font-weight: bold;');
console.log('%cInterested in working together? Reach out at jaevoli18@gmail.com', 'color: #D4A574; font-size: 14px;');
console.log('%c💻 Built with vanilla JavaScript, HTML, and CSS', 'color: #666; font-size: 12px;');

// ===================================
// Keyboard Navigation Enhancement
// ===================================
document.addEventListener('keydown', (e) => {
  // Press 'Esc' to close mobile menu
  if (e.key === 'Escape') {
    const navMenu = document.getElementById('navMenu');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');

    if (navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');

      const icon = mobileMenuToggle.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    }
  }

  // Press 'Home' to scroll to top
  if (e.key === 'Home' && e.ctrlKey) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});

// ===================================
// Print Styles Helper
// ===================================
window.addEventListener('beforeprint', () => {
  console.log('Preparing to print...');
  // Add any print-specific JavaScript here
});

// ===================================
// Accessibility: Focus Management
// ===================================
function initFocusManagement() {
  // Add visible focus indicators for keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
  });
}

// Initialize focus management
initFocusManagement();

// ===================================
// Update Copyright Year Dynamically
// ===================================
function updateCopyrightYear() {
  const copyrightElement = document.querySelector('.footer-bottom p');

  if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    copyrightElement.innerHTML = copyrightElement.innerHTML.replace(/©\s*\d{4}/, `© ${currentYear}`);
  }
}

// Update copyright year on load
updateCopyrightYear();
