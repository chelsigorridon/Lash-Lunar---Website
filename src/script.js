// script.js
import { initServicesDropdown } from './servicesdropdown.js';
import { mobileNav } from './mobilenav.js'; 
import { initSmoothScroll } from './smoothscroll.js';

// Initialize dropdown when page loads
document.addEventListener('DOMContentLoaded', () => {
  initServicesDropdown();
  mobileNav();
  initSmoothScroll();
});


