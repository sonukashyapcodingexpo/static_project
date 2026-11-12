/**
 * Main Application Entry Point
 */
import { initNavigation } from './navigation.js';
import { initAccordions } from './accordion.js';
import { initScrollReveal } from './animations.js';
import { initForms } from './forms.js';
import { initFilters } from './filters.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAccordions();
  initScrollReveal();
  initForms();
  initFilters();
});
