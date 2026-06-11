/* -------------------------------------------------------------
   CORE INSURANCE SL - MASTER JS LOGIC
   Pure Vanilla JavaScript
   ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initThemeToggle();
  initModalCallback();
  initReviewsSlider();
  initCookieConsent();
  initSimulatedForms();
  initScrollAnimations();
});

/* --- Header Scroll Effect --- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const isHome = document.body.classList.contains('home-page');

  const handleScroll = () => {
    if (!isHome || window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  // Trigger once on load in case page was refreshed scrolled
  handleScroll();
}

/* --- Mobile Hamburger Menu --- */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('open');
    navMenu.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });
}

/* --- Dark/Light Theme Toggle --- */
function initThemeToggle() {
  const themeBtn = document.querySelector('.theme-toggle');
  if (!themeBtn) return;

  const icon = themeBtn.querySelector('i');
  
  // Check local storage or system preferences
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (icon) {
      icon.className = 'fas fa-sun';
    }
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (icon) {
      icon.className = 'fas fa-moon';
    }
  }

  themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      if (icon) icon.className = 'fas fa-moon';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      if (icon) icon.className = 'fas fa-sun';
    }
  });
}

/* --- "¿Te llamamos?" Modal Trigger --- */
function initModalCallback() {
  const modal = document.querySelector('#callbackModal');
  const triggers = document.querySelectorAll('.trigger-callback');
  const closeBtn = document.querySelector('#closeCallbackModal');

  if (!modal || !closeBtn) return;

  const openModal = (e) => {
    if (e) e.preventDefault();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  };

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = ''; // Restore scroll
  };

  triggers.forEach(trigger => {
    trigger.addEventListener('click', openModal);
  });

  closeBtn.addEventListener('click', closeModal);

  // Close modal when clicking outside the card
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Handle escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* --- Reviews Slider --- */
function initReviewsSlider() {
  const wrapper = document.querySelector('.reviews-wrapper');
  const prevBtn = document.querySelector('#prevReview');
  const nextBtn = document.querySelector('#nextReview');

  if (!wrapper || !prevBtn || !nextBtn) return;

  let index = 0;

  const getSlidesPerView = () => {
    return window.innerWidth > 1024 ? 2 : 1;
  };

  const updateSlider = () => {
    const slides = document.querySelectorAll('.review-slide');
    const slideWidth = slides[0].getBoundingClientRect().width;
    const gap = 32; // Matches gap: 2rem in styles.css (32px)
    
    const maxIndex = slides.length - getSlidesPerView();
    if (index > maxIndex) index = maxIndex;
    if (index < 0) index = 0;

    wrapper.style.transform = `translateX(-${(slideWidth + gap) * index}px)`;
  };

  nextBtn.addEventListener('click', () => {
    const slidesCount = document.querySelectorAll('.review-slide').length;
    const maxIndex = slidesCount - getSlidesPerView();
    if (index < maxIndex) {
      index++;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });

  window.addEventListener('resize', updateSlider);
}

/* --- Cookie Consent Bar --- */
function initCookieConsent() {
  const cookieBar = document.querySelector('#cookieBar');
  const acceptBtn = document.querySelector('#cookieAccept');
  const rejectBtn = document.querySelector('#cookieReject');

  if (!cookieBar || !acceptBtn || !rejectBtn) return;

  const consent = localStorage.getItem('cookie-consent');
  if (!consent) {
    setTimeout(() => {
      cookieBar.style.display = 'block';
    }, 1500);
  }

  const handleChoice = (choice) => {
    localStorage.setItem('cookie-consent', choice);
    cookieBar.style.display = 'none';
  };

  acceptBtn.addEventListener('click', () => handleChoice('accepted'));
  rejectBtn.addEventListener('click', () => handleChoice('rejected'));
}

/* --- Simulated Form Submission with Toasts --- */
function initSimulatedForms() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple Validation Check
      if (!form.checkValidity()) return;

      const submitBtn = form.querySelector('[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      }

      // Simulate network request delay
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        // Close callback modal if it was open
        const openModal = document.querySelector('.modal-overlay.open');
        if (openModal) {
          openModal.classList.remove('open');
          document.body.style.overflow = '';
        }

        // Reset form fields
        form.reset();

        // Show elegant success notification
        showToast('Solicitud Enviada', 'Nos pondremos en contacto contigo a la mayor brevedad.');
      }, 1500);
    });
  });
}

/* --- Success Toast Notification helper --- */
function showToast(title, message) {
  let toastContainer = document.querySelector('.toast-notification');
  
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-notification';
    document.body.appendChild(toastContainer);
  }

  toastContainer.innerHTML = `
    <div class="toast-icon"><i class="fas fa-check-circle"></i></div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
  `;

  // Animate in
  setTimeout(() => {
    toastContainer.classList.add('show');
  }, 100);

  // Animate out after 4.5 seconds
  setTimeout(() => {
    toastContainer.classList.remove('show');
  }, 4500);
}

/* --- Smooth Fade-In-Up Animations on Scroll --- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.value-card, .service-card, .news-card, .about-img-frame, .contact-info-panel, .contact-form-panel');
  
  if (!elements.length) return;

  // Set initial hidden state styles directly if not already handled
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target); // Trigger once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}
