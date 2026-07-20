// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a nav link is tapped (useful on mobile)
  siteNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
