/**
 * Accessible Accordion component handler
 */
export function initAccordions() {
  const triggers = document.querySelectorAll('.accordion-trigger');
  
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      if (!item) return;
      
      const isOpen = item.hasAttribute('open');
      const parent = item.closest('.accordion');
      
      // If single-open behavior is desired within the accordion
      if (parent && parent.dataset.exclusive === 'true') {
        parent.querySelectorAll('.accordion-item[open]').forEach(openItem => {
          if (openItem !== item) {
            openItem.removeAttribute('open');
            openItem.querySelector('.accordion-trigger')?.setAttribute('aria-expanded', 'false');
          }
        });
      }
      
      if (isOpen) {
        item.removeAttribute('open');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.setAttribute('open', '');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

