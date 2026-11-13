/**
 * Luminate — Corporate Engineering & Technology Architecture
 * Production Interactive & Kinetic Motion System (Vanilla ES6+)
 * Zero external dependencies. Zero emojis. 100% accessible and file:// compatible.
 */

(function () {
  'use strict';

  // --- 1. Accessible Navigation & Mobile Drawer ---
  function initNavigation() {
    const header = document.querySelector('.site-header');
    const navMenu = document.querySelector('.nav-menu');
    let menuToggle = document.querySelector('.menu-toggle');

    // Ensure header has menu toggle button for mobile
    if (header && !menuToggle) {
      const headerInner = header.querySelector('.header-inner') || header.querySelector('.container');
      if (headerInner) {
        menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = `
          <svg class="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>`;
        
        const actionArea = headerInner.querySelector('.d-flex.align-center') || headerInner;
        actionArea.appendChild(menuToggle);
      }
    }

    if (menuToggle && navMenu) {
      // Ensure mobile CTA exists inside drawer
      if (!navMenu.querySelector('.mobile-nav-cta')) {
        const ctaBtn = document.createElement('a');
        ctaBtn.href = navMenu.querySelector('a[href*="request-a-quote"]')?.href || 
          (window.location.pathname.includes('/services/') || window.location.pathname.includes('/about-us/') ? '../request-a-quote/index.html' : './request-a-quote/index.html');
        ctaBtn.className = 'btn btn-primary mobile-nav-cta';
        ctaBtn.textContent = 'Request an Estimate';
        navMenu.appendChild(ctaBtn);
      }

      const toggleMenu = (open) => {
        const isOpen = open !== undefined ? open : navMenu.classList.contains('is-open');
        const nextState = !isOpen;
        menuToggle.setAttribute('aria-expanded', String(nextState));
        navMenu.classList.toggle('is-open', nextState);
        document.body.classList.toggle('menu-open', nextState);

        // Update toggle icon
        if (nextState) {
          menuToggle.innerHTML = `
            <svg class="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>`;
        } else {
          menuToggle.innerHTML = `
            <svg class="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>`;
        }
      };

      menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
      });

      // Close menu when clicking any nav link
      navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          if (navMenu.classList.contains('is-open')) toggleMenu(true);
        });
      });

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('is-open') && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
          toggleMenu(true);
        }
      });

      // Close on ESC key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
          toggleMenu(true);
          menuToggle.focus();
        }
      });
    }

    // Header scroll elevation
    if (header) {
      const onScroll = () => {
        if (window.scrollY > 20) {
          header.classList.add('is-scrolled');
        } else {
          header.classList.remove('is-scrolled');
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  // --- 2. Accessible Accordions ---
  function initAccordions() {
    const items = document.querySelectorAll('.accordion-item');
    items.forEach(item => {
      const trigger = item.querySelector('.accordion-trigger');
      if (!trigger) return;

      // Sync initial state
      const isOpen = item.hasAttribute('open');
      trigger.setAttribute('aria-expanded', String(isOpen));

      trigger.addEventListener('click', () => {
        const currentlyOpen = item.hasAttribute('open');
        const parent = item.closest('.accordion');

        // Exclusive mode
        if (parent && parent.dataset.exclusive === 'true' && !currentlyOpen) {
          parent.querySelectorAll('.accordion-item[open]').forEach(openItem => {
            if (openItem !== item) {
              openItem.removeAttribute('open');
              openItem.querySelector('.accordion-trigger')?.setAttribute('aria-expanded', 'false');
            }
          });
        }

        if (currentlyOpen) {
          item.removeAttribute('open');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          item.setAttribute('open', '');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // --- 3. Portfolio Category Filtering ---
  function initFilters() {
    const buttons = document.querySelectorAll('[data-filter-btn]');
    const cards = document.querySelectorAll('[data-filter-category]');

    if (!buttons.length || !cards.length) return;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-filter-btn');

        buttons.forEach(b => {
          const isActive = b === btn;
          b.classList.toggle('active', isActive);
          b.setAttribute('aria-pressed', String(isActive));
        });

        cards.forEach(card => {
          const categories = card.getAttribute('data-filter-category').split(' ');
          const matches = target === 'all' || categories.includes(target);

          if (matches) {
            card.style.display = '';
            card.removeAttribute('hidden');
            card.style.opacity = '0';
            card.style.transform = 'translateY(12px)';
            requestAnimationFrame(() => {
              card.style.transition = 'opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else {
            card.style.display = 'none';
            card.setAttribute('hidden', '');
          }
        });
      });
    });
  }

  // --- 4. Interactive Forms Validation & Submission ---
  function initForms() {
    const forms = document.querySelectorAll('form[data-validate="true"], form');

    forms.forEach(form => {
      form.setAttribute('novalidate', 'true');

      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        let isValid = true;
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

        inputs.forEach(input => {
          const group = input.closest('.form-group') || input.parentElement;
          const val = input.value.trim();
          let fieldValid = true;

          if (!val) {
            fieldValid = false;
          } else if (input.type === 'email') {
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!pattern.test(val)) fieldValid = false;
          }

          if (!fieldValid) {
            isValid = false;
            group.classList.add('has-error');
            input.setAttribute('aria-invalid', 'true');
          } else {
            group.classList.remove('has-error');
            input.removeAttribute('aria-invalid');
          }

          input.addEventListener('input', () => {
            group.classList.remove('has-error');
            input.removeAttribute('aria-invalid');
          }, { once: true });
        });

        if (!isValid) {
          const firstErr = form.querySelector('.has-error input, .has-error select, .has-error textarea');
          if (firstErr) firstErr.focus();
          return;
        }

        // Submit action
        const submitBtn = form.querySelector('button[type="submit"]');
        const origText = submitBtn ? submitBtn.innerHTML : '';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = `
            <span style="display: inline-flex; align-items: center; gap: 8px;">
              <svg class="icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 0.8s linear infinite;">
                <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
                <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
              </svg>
              Processing Scope...
            </span>`;
        }

        // Simulate secure API response
        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = origText;
          }

          let success = form.querySelector('.form-success-message');
          if (!success) {
            success = document.createElement('div');
            success.className = 'form-success-message';
            success.style.cssText = `
              padding: var(--space-md) var(--space-lg);
              background: #EBF7EE;
              color: #1E6B38;
              border: 1px solid #C1E7C4;
              border-radius: var(--radius-sm);
              margin-top: var(--space-lg);
              font-family: var(--font-heading);
              font-weight: var(--fw-semibold);
              font-size: var(--text-body-sm);
              line-height: 1.5;
              display: flex;
              align-items: center;
              gap: 8px;
            `;
            form.appendChild(success);
          }
          success.innerHTML = `
            <svg class="icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Success! Your request has been logged. An engineering lead from Luminate will review your specification and reach out within 1 business day.`;
          form.reset();
          showToast('Enquiry received! We will reply within 1 business day.');
        }, 600);
      });
    });
  }

  // --- 5. Interactive Quote Estimator ---
  function initQuoteEstimator() {
    const quoteForm = document.querySelector('form[data-validate="true"]');
    if (!quoteForm || !window.location.pathname.includes('request-a-quote')) return;

    const typeRadios = quoteForm.querySelectorAll('input[name="project_type"]');
    const budgetSelect = quoteForm.querySelector('#quote-budget');

    // Create dynamic estimation box
    let estimateCard = document.querySelector('.quote-estimate-card');
    if (!estimateCard) {
      estimateCard = document.createElement('div');
      estimateCard.className = 'quote-estimate-card motion-card';
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        quoteForm.insertBefore(estimateCard, submitBtn);
      }
    }

    const estimates = {
      'web-app': {
        title: 'Custom Web Application Scope',
        duration: '4–8 Weeks',
        team: '1 Lead Architect, 2 Full-Stack Engineers, 1 QA Specialist',
        deliverables: 'Responsive SPA/SSR, Microservice APIs, CI/CD Pipeline, Automated E2E Tests'
      },
      'ai-saas': {
        title: 'AI / SaaS Platform Engineering',
        duration: '8–14 Weeks',
        team: '1 AI/ML Lead, 2 Backend Engineers, 1 Cloud Architect, 1 Product Designer',
        deliverables: 'Model Pipeline/Fine-tuning, Multi-tenant Architecture, Stripe Billing, Real-Time Ingestion'
      },
      'erp-enterprise': {
        title: 'Enterprise ERP & Modernization Scope',
        duration: '12–20 Weeks',
        team: '1 Solutions Architect, 3 Senior Developers, 1 Database DBA, 1 Security Auditor',
        deliverables: 'Role-Based Access (RBAC), Legacy DB Migration, Event-Driven Kafka Streaming, SOC2 Compliance'
      },
      'ecommerce': {
        title: 'Headless E-Commerce Architecture',
        duration: '6–10 Weeks',
        team: '1 Technical Lead, 2 E-Commerce Developers, 1 UI/UX Specialist',
        deliverables: 'Multi-Currency Storefront, ERP Inventory Sync, Payment Gateway, Sub-Second P99 Latency'
      }
    };

    function updateEstimate() {
      const selectedType = quoteForm.querySelector('input[name="project_type"]:checked')?.value || 'web-app';
      const data = estimates[selectedType] || estimates['web-app'];
      const budgetText = budgetSelect ? budgetSelect.options[budgetSelect.selectedIndex].text : '';

      // Highlight selected label
      typeRadios.forEach(r => {
        const lbl = r.closest('.quote-option-label');
        if (lbl) lbl.classList.toggle('is-selected', r.checked);
      });

      estimateCard.innerHTML = `
        <div class="estimate-title">Engineering Scope Preview • ${data.title}</div>
        <div class="estimate-details">
          <div class="estimate-item">
            <strong>Target Delivery:</strong> ${data.duration}
          </div>
          <div class="estimate-item">
            <strong>Engineering Pod:</strong> ${data.team}
          </div>
          <div class="estimate-item" style="width: 100%;">
            <strong>Key Deliverables:</strong> ${data.deliverables}
          </div>
          <div class="estimate-item" style="font-size: var(--text-eyebrow); color: var(--color-ink-muted);">
            Allocation Tier: ${budgetText}
          </div>
        </div>
      `;
    }

    typeRadios.forEach(r => r.addEventListener('change', updateEstimate));
    if (budgetSelect) budgetSelect.addEventListener('change', updateEstimate);
    updateEstimate();
  }

  // --- 6. Live Instant Search (FAQs & Sitemap) ---
  function initLiveSearch() {
    const isFaq = window.location.pathname.includes('faqs');
    const isSitemap = window.location.pathname.includes('sitemap');

    if (!isFaq && !isSitemap) return;

    const container = document.querySelector('.section-header') || document.querySelector('.container-narrow');
    if (!container) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'live-search-wrapper';
    wrapper.innerHTML = `
      <svg class="live-search-icon icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input type="text" class="live-search-input" placeholder="${isFaq ? 'Search questions by keyword (e.g. security, pricing, tech)...' : 'Search all 73 pages in sitemap...'}" aria-label="Search filter">
    `;

    const nextElem = container.nextElementSibling;
    if (container.parentElement) {
      container.parentElement.insertBefore(wrapper, nextElem);
    }

    const input = wrapper.querySelector('.live-search-input');

    if (isFaq) {
      const items = document.querySelectorAll('.accordion-item');
      input.addEventListener('input', () => {
        const query = input.value.toLowerCase().trim();
        items.forEach(item => {
          const text = item.textContent.toLowerCase();
          const match = text.includes(query);
          item.style.display = match ? '' : 'none';
          if (match && query.length > 2) {
            item.setAttribute('open', '');
            item.querySelector('.accordion-trigger')?.setAttribute('aria-expanded', 'true');
          }
        });
      });
    } else if (isSitemap) {
      const links = document.querySelectorAll('.grid-3 li, .grid-4 li, ul li');
      input.addEventListener('input', () => {
        const query = input.value.toLowerCase().trim();
        links.forEach(li => {
          const text = li.textContent.toLowerCase();
          li.style.display = text.includes(query) ? '' : 'none';
        });
      });
    }
  }

  // --- 7. Floating Back to Top Button ---
  function initBackToTop() {
    let btn = document.querySelector('.back-to-top');
    if (!btn) {
      btn = document.createElement('button');
      btn.className = 'back-to-top';
      btn.setAttribute('aria-label', 'Scroll back to top');
      btn.innerHTML = `
        <svg class="icon-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>`;
      document.body.appendChild(btn);
    }

    window.addEventListener('scroll', () => {
      btn.classList.toggle('is-visible', window.scrollY > 320);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- 8. Toast Feedback ---
  function showToast(msg) {
    let toast = document.querySelector('.toast-notification');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-notification';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('is-active');
    setTimeout(() => {
      toast.classList.remove('is-active');
    }, 4000);
  }

  // --- 9. Kinetic Numerical Counter Animation ---
  function initCountUpStats() {
    const stats = document.querySelectorAll('.stat-number');
    if (!stats.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          observer.unobserve(el);

          const rawText = el.textContent.trim();
          // Match numbers like 48, 99.98, 10, 82, 3.2
          const match = rawText.match(/([<>]?\s*)([0-9]+(?:\.[0-9]+)?)(.*)/);
          if (!match) return;

          const prefix = match[1] || '';
          const targetNum = parseFloat(match[2]);
          const suffix = match[3] || '';
          const isDecimal = match[2].includes('.');
          const duration = 1200; // ms
          const startTime = performance.now();

          function step(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentNum = targetNum * easeProgress;

            el.textContent = prefix + (isDecimal ? currentNum.toFixed(2) : Math.round(currentNum)) + suffix;

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              el.textContent = rawText; // restore exact original
            }
          }
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.3 });

    stats.forEach(s => observer.observe(s));
  }

  // --- 10. Progressive Kinetic Motion System ---
  function initMotionSystem() {
    document.documentElement.classList.add('js-reveal');
    const motionTargets = document.querySelectorAll('.reveal, .motion-div, .card, .portfolio-card, .process-step');

    // Automatically apply staggered delay indices to sibling cards
    document.querySelectorAll('.grid-3, .grid-2, .grid-4, .process-list').forEach(grid => {
      const children = Array.from(grid.children);
      children.forEach((child, index) => {
        child.classList.add('motion-div');
        const delay = (index % 4) * 100;
        if (delay > 0) child.classList.add(`delay-${delay}`);
      });
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in-view', 'is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      motionTargets.forEach(el => observer.observe(el));
    } else {
      motionTargets.forEach(el => el.classList.add('is-in-view', 'is-revealed'));
    }
  }

  // --- 11. Global Scroll Progress Indicator ---
  function initScrollProgressBar() {
    let bar = document.querySelector('.scroll-progress-bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'scroll-progress-bar';
      document.body.appendChild(bar);
    }

    const updateBar = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal <= 0) return;
      const progress = (window.scrollY / scrollTotal) * 100;
      bar.style.width = Math.min(Math.max(progress, 0), 100) + '%';
    };

    window.addEventListener('scroll', updateBar, { passive: true });
    updateBar();
  }

  // --- 12. Interactive 3D Card Parallax on Hover ---
  function init3DCardParallax() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const cards = document.querySelectorAll('.hero-visual-card, .featured-project, .motion-card');

    cards.forEach(card => {
      let isHovered = false;

      card.addEventListener('mouseenter', () => {
        isHovered = true;
        card.style.transition = 'transform 0.12s ease-out, box-shadow 0.3s ease';
      });

      card.addEventListener('mousemove', (e) => {
        if (!isHovered) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Gentle tilt angles (max ±3.5 degrees)
        const tiltX = ((y - centerY) / centerY) * -3.5;
        const tiltY = ((x - centerX) / centerX) * 3.5;

        card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-6px)`;
      });

      card.addEventListener('mouseleave', () => {
        isHovered = false;
        card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease';
        card.style.transform = '';
      });
    });
  }

  // --- Initialization on Ready ---
  function initAll() {
    initNavigation();
    initAccordions();
    initFilters();
    initForms();
    initQuoteEstimator();
    initLiveSearch();
    initBackToTop();
    initMotionSystem();
    initCountUpStats();
    initScrollProgressBar();
    init3DCardParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  // Global exposure for ES modular and inline compatibility
  window.LuminateApp = {
    initNavigation,
    initAccordions,
    initFilters,
    initForms,
    initQuoteEstimator,
    initLiveSearch,
    initBackToTop,
    initMotionSystem,
    initCountUpStats,
    showToast
  };
})();
