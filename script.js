document.documentElement.classList.remove('no-js');

const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const backToTop = document.querySelector('.back-to-top');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Mở menu' : 'Đóng menu');
    siteNav.classList.toggle('open', !isOpen);
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Mở menu');
      siteNav.classList.remove('open');
    });
  });
}

const updateBackToTop = () => {
  backToTop?.classList.toggle('visible', window.scrollY > 600);
};
window.addEventListener('scroll', updateBackToTop, { passive: true });
updateBackToTop();
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const revealTargets = document.querySelectorAll(
  '.section-kicker, .intro-grid, .decision-ribbon, .pain-card, .audience-line, .collection-layout, .value-strip, .market-metrics, .research-note, .competitor-heading, .competitor-table, .swot-grid, .porter-block, .evolution-compare, .why-change, .model-grid, .channels, .finance-banner, .finance-kpis, .finance-chart-wrap, .finance-details, .assumptions, .finance-caveat, .risk-grid, .risk-note, .closing-section, .reference-list'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        activeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });

  revealTargets.forEach((target) => {
    target.classList.add('reveal');
    observer.observe(target);
  });
} else {
  revealTargets.forEach((target) => target.classList.add('is-visible'));
}
