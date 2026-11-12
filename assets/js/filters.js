/**
 * Portfolio Client-Side Category Filtering
 * Keyboard accessible with aria-pressed attributes
 */
export function initFilters() {
  const filterButtons = document.querySelectorAll('[data-filter-btn]');
  const filterItems = document.querySelectorAll('[data-filter-category]');

  if (!filterButtons.length || !filterItems.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.getAttribute('data-filter-btn');

      // Update ARIA pressed state
      filterButtons.forEach(b => {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        b.classList.toggle('active', b === btn);
      });

      // Filter items
      filterItems.forEach(item => {
        const itemCategories = item.getAttribute('data-filter-category').split(' ');
        if (targetCategory === 'all' || itemCategories.includes(targetCategory)) {
          item.style.display = '';
          item.removeAttribute('hidden');
        } else {
          item.style.display = 'none';
          item.setAttribute('hidden', '');
        }
      });
    });
  });
}

