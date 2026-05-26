function initNavigation() {
  const hamburger = $('.hamburger');
  const navLinks = $('.nav-links');
  const links = $$('.nav-links a');
  const navbar = $('.navbar');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  window.addEventListener('scroll', throttle(() => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, 100), { passive: true });

  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
