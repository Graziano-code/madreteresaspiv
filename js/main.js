/**
 * MAIN JAVASCRIPT
 * Gestione menu mobile e interazioni UI di base
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
});

/**
 * Inizializza il menu hamburger mobile con supporto accessibilità
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    
    // Toggle state
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    mobileNav.classList.toggle('is-open');
    
    if (!isExpanded) {
      // Focus sul primo link quando si apre
      const firstLink = mobileNav.querySelector('a');
      if (firstLink) firstLink.focus();
    }
  });

  // Chiudi menu con tasto ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('is-open');
      toggleBtn.focus();
    }
  });
}
