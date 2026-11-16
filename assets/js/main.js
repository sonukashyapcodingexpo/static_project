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
      initMegaMenus(navMenu);

      // Ensure mobile CTA exists inside drawer with exact relative URL from header
      if (!navMenu.querySelector('.mobile-nav-cta')) {
        const ctaBtn = document.createElement('a');
        const headerQuoteHref = header.querySelector('a[href*="request-a-quote"]')?.getAttribute('href') || './request-a-quote/index.html';
        ctaBtn.href = headerQuoteHref;
        ctaBtn.className = 'btn btn-primary mobile-nav-cta';
        ctaBtn.textContent = 'Request an Estimate';
        navMenu.appendChild(ctaBtn);
      }

      const toggleMenu = (forceClose) => {
        const isOpen = navMenu.classList.contains('is-open');
        const nextState = forceClose === true ? false : !isOpen;

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
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
      });

      // Close menu when clicking any link inside drawer
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

  function pagePrefix() {
    const script = document.querySelector('script[src*="assets/js/main.js"]');
    if (!script) return './';
    return script.getAttribute('src').replace(/assets\/js\/main\.js.*$/, '');
  }

  function initMegaMenus(navMenu) {
    if (!navMenu || navMenu.dataset.mega === 'ready') return;
    navMenu.dataset.mega = 'ready';
    const prefix = pagePrefix();
    const to = (path) => prefix + path;

    const menus = [
      {
        match: 'services/index.html',
        label: 'Services',
        columns: [
          {
            kicker: 'Build',
            items: [
              ['Software development', 'Custom systems shaped around how the business runs.', 'software-development/index.html'],
              ['Websites & web apps', 'Fast sites and applications your team can keep updating.', 'website-development/index.html'],
              ['Mobile apps', 'Android and iOS products built for everyday use.', 'mobile-app-development/index.html'],
              ['Product & SaaS', 'From a first version through a release you can stand behind.', 'saas-development/index.html']
            ]
          },
          {
            kicker: 'Grow',
            items: [
              ['AI solutions', 'Chatbots, voice agents, and practical automation.', 'ai-development/index.html'],
              ['ERP, CRM & HR', 'Operations software for teams that have outgrown spreadsheets.', 'erp-development/index.html'],
              ['Ecommerce', 'Stores and B2B portals that can take real order volume.', 'ecommerce-development/index.html'],
              ['SEO & marketing', 'Search, paid media, and social that support the product.', 'seo-services/index.html']
            ]
          }
        ],
        all: ['All services', 'services/index.html']
      },
      {
        match: 'about-us/index.html',
        label: 'Company',
        columns: [
          {
            kicker: 'Company',
            items: [
              ['About us', 'Who we are and how the studio works.', 'about-us/index.html'],
              ['How we work', 'Discovery, build, launch, and the support after.', 'our-process/index.html'],
              ['Our team', 'The people who design and ship the work.', 'our-team/index.html'],
              ['Careers', 'Open roles on the team.', 'careers/index.html']
            ]
          },
          {
            kicker: 'Work',
            items: [
              ['Portfolio', 'Selected platforms and products.', 'portfolio/index.html'],
              ['Case studies', 'What changed after the work shipped.', 'case-studies/index.html'],
              ['Why Luminate', 'How we choose tools, dates, and support.', 'why-choose-us/index.html'],
              ['FAQs', 'Straight answers before a project starts.', 'faqs/index.html']
            ]
          }
        ]
      }
    ];

    const contact = [...navMenu.querySelectorAll(':scope > a.nav-link')].find((anchor) =>
      (anchor.getAttribute('href') || '').includes('contact-us/')
    );
    const herePath = location.pathname.replace(/\\/g, '/');
    [
      ['portfolio/', 'Portfolio', 'portfolio/index.html'],
      ['case-studies/', 'Case Studies', 'case-studies/index.html']
    ].forEach(([key, label, path]) => {
      let link = [...navMenu.querySelectorAll(':scope > a.nav-link')].find((anchor) =>
        (anchor.getAttribute('href') || '').includes(key)
      );
      if (!link) {
        link = document.createElement('a');
        link.className = 'nav-link';
        link.href = to(path);
        link.textContent = label;
      }
      link.classList.remove('nav-link-skip');
      if (herePath.includes('/' + key)) link.classList.add('active');
      if (contact) navMenu.insertBefore(link, contact);
      else navMenu.appendChild(link);
    });

    menus.forEach((menu) => {
      const link = [...navMenu.querySelectorAll(':scope > a.nav-link')].find((a) => (a.getAttribute('href') || '').includes(menu.match));
      if (!link) return;

      const item = document.createElement('div');
      item.className = 'nav-item';
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'nav-link nav-drop';
      button.setAttribute('aria-expanded', 'false');
      if (link.classList.contains('active')) {
        button.classList.add('active');
        item.classList.add('is-current');
      }
      button.innerHTML = menu.label + '<svg class="nav-caret" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>';

      const panel = document.createElement('div');
      panel.className = 'nav-panel';
      panel.hidden = true;
      panel.innerHTML = menu.columns.map((column) => `
        <div class="nav-col">
          <p class="nav-kicker">${column.kicker}</p>
          ${column.items.map(([title, text, path]) => `
            <a class="nav-choice" href="${to(path)}">
              <strong>${title}</strong>
              <span>${text}</span>
            </a>`).join('')}
        </div>`).join('') + (menu.all ? `<a class="nav-panel-all" href="${to(menu.all[1])}">${menu.all[0]}</a>` : '');

      item.append(button, panel);
      link.replaceWith(item);
    });

    const closePanels = () => {
      navMenu.querySelectorAll('.nav-item.is-open').forEach((item) => {
        item.classList.remove('is-open');
        const button = item.querySelector('.nav-drop');
        const panel = item.querySelector('.nav-panel');
        if (button) button.setAttribute('aria-expanded', 'false');
        if (panel) panel.hidden = true;
      });
    };

    navMenu.querySelectorAll('.nav-drop').forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const item = button.closest('.nav-item');
        const willOpen = !item.classList.contains('is-open');
        closePanels();
        if (willOpen) {
          item.classList.add('is-open');
          button.setAttribute('aria-expanded', 'true');
          item.querySelector('.nav-panel').hidden = false;
        }
      });
    });

    document.addEventListener('click', (event) => {
      if (!navMenu.contains(event.target)) closePanels();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closePanels();
    });

    const here = location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '');
    const topLevelDest = (link) => new URL(link.getAttribute('href'), location.href).pathname.replace(/\/index\.html$/, '').replace(/\/$/, '');
    navMenu.querySelectorAll('.nav-choice, .nav-panel-all').forEach((anchor) => {
      const dest = topLevelDest(anchor);
      if (!dest || !here.endsWith(dest)) return;
      anchor.classList.add('is-here');
      const alreadyInBar = [...navMenu.querySelectorAll(':scope > a.nav-link')].some((link) => topLevelDest(link) === dest);
      if (!alreadyInBar) anchor.closest('.nav-item')?.classList.add('is-current');
    });
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
        const processingText = form.dataset.processingText || 'Processing Scope...';
        const successMessage = form.dataset.successMessage || 'Success! Your request has been logged. An engineering lead from Luminate will review your specification and reach out within 1 business day.';
        const toastMessage = form.dataset.toastMessage || 'Enquiry received! We will reply within 1 business day.';

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = `
            <span style="display: inline-flex; align-items: center; gap: 8px;">
              <svg class="icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 0.8s linear infinite;">
                <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
                <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
              </svg>
              ${processingText}
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
            success.setAttribute('role', 'status');
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
            ${successMessage}`;
          form.reset();
          form.dispatchEvent(new CustomEvent('form:success', { bubbles: true }));
          showToast(toastMessage);
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
    const stats = document.querySelectorAll('.stat-number, .metric b');
    if (!stats.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (!('IntersectionObserver' in window)) return;

    function readStat(el) {
      if (el.querySelector('svg, img')) return null;
      const suffixEl = el.querySelector('span');
      const source = suffixEl
        ? [...el.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim())
        : null;
      const rawText = (source ? source.textContent : el.textContent).trim();
      const match = rawText.match(/([<>]?\s*)([0-9]+(?:\.[0-9]+)?)(.*)/);
      if (!match) return null;
      return {
        prefix: match[1] || '',
        target: parseFloat(match[2]),
        suffix: match[3] || '',
        decimal: match[2].includes('.'),
        write(value) {
          const shown = this.decimal ? value.toFixed(2) : String(Math.round(value));
          if (source) source.textContent = this.prefix + shown + this.suffix;
          else el.textContent = this.prefix + shown + this.suffix;
        }
      };
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const stat = el._countStat;
        if (!stat) return;
        observer.unobserve(el);

        const duration = 1500;
        const startTime = performance.now();

        function step(now) {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          stat.write(stat.target * eased);
          if (progress < 1) requestAnimationFrame(step);
          else stat.write(stat.target);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });

    stats.forEach((el) => {
      const stat = readStat(el);
      if (!stat) return;
      el._countStat = stat;
      stat.write(0);
      observer.observe(el);
    });
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
    // Disable on touch devices and mobile/tablet screens to prevent touch scroll jitter
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
    if (window.innerWidth <= 1024) return;

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

  function initPageStage() {
    if (document.body.classList.contains('home')) return;
    const main = document.querySelector('main');
    if (!main || main.querySelector('.page-stage')) return;

    const first = main.querySelector(':scope > section, :scope > article');
    if (!first) return;
    const title = first.querySelector('h1');
    if (!title) return;

    const stage = document.createElement('section');
    stage.className = 'page-stage';
    if (!title.id) title.id = 'page-title';
    stage.setAttribute('aria-labelledby', title.id);
    if (first.classList.contains('text-center')) stage.classList.add('is-center');

    const split = title.closest('.split-7-5, .split-6-6, .split-5-7, .contact-layout');
    const splitIsHero = split && first.contains(split) && !split.querySelector('.grid-3, .accordion, .portfolio-card');
    const headerBlock = title.closest('.section-header');
    const useNarrow = !splitIsHero && !!first.querySelector(':scope > .container-narrow');

    const copy = document.createElement('div');
    copy.className = (useNarrow ? 'container-narrow' : 'container') + ' page-stage-copy';

    const crumbs = first.querySelector('.breadcrumbs');
    if (crumbs) copy.appendChild(crumbs);

    if (splitIsHero) {
      stage.classList.add('page-stage-split');
      copy.appendChild(split);
    } else if (headerBlock && first.contains(headerBlock)) {
      copy.appendChild(headerBlock);
    } else {
      const eyebrow = title.previousElementSibling;
      let node = title.nextElementSibling;
      if (eyebrow && eyebrow.classList.contains('eyebrow')) copy.appendChild(eyebrow);
      copy.appendChild(title);
      let guard = 0;
      while (node && guard < 3) {
        const next = node.nextElementSibling;
        const text = (node.textContent || '').trim();
        const shortPara = node.matches('p, .lead, .section-description') && text.length < 360;
        const byline = node.classList.contains('d-flex') && text.length < 240 && !node.querySelector('form, img, h2, pre, .card');
        const actions = node.matches('div') && node.querySelector(':scope > .btn, :scope > a.btn') && text.length < 180 && !node.querySelector('form, img, h2, pre');
        if (shortPara || byline || actions) {
          copy.appendChild(node);
          guard += 1;
          node = next;
          continue;
        }
        break;
      }
    }

    stage.appendChild(copy);
    main.insertBefore(stage, first);

    first.querySelectorAll('.section-header, .container, .container-narrow').forEach((el) => {
      if (!el.querySelector('img, video, form, input, button, h1, h2, h3, p, li, pre, article, .card, .accordion')) {
        el.remove();
      }
    });

    const leftover = first.querySelector('img, video, form, input, button, h2, h3, p, li, pre, article, .card, .accordion, .grid, .grid-2, .grid-3');
    if (!leftover) first.remove();
    else first.classList.add('page-rest');
  }

  // --- Initialization on Ready ---
  function initAll() {
    initPageStage();
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
