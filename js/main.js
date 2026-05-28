document.addEventListener('DOMContentLoaded', () => {
  if (typeof portfolioData === 'undefined' || !portfolioData) {
    console.error('portfolioData is not defined. Check that data.js loaded correctly.');
    return;
  }

  initNavigation();
  initTypingAnimation();
  initParticles();
  initSkills();
  initProjects();
  initTestimonials();
  initStats();
  initContactForm();
  initScrollAnimations();
});

function initSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  const categories = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Database' },
    { key: 'devops', label: 'DevOps & Tools' }
  ];

  grid.innerHTML = categories.map(cat => {
    const skills = portfolioData.skills[cat.key];
    return `
      <div class="skill-category" data-reveal>
        <h3 class="skill-category-title"><span>//</span> ${cat.label}</h3>
        <div class="skill-items">
          ${skills.map(s => `
            <div class="skill-item">
              ${s.icon
                ? `<i class="${s.icon} colored skill-icon"></i>`
                : `<i data-lucide="code-2" class="skill-icon"></i>`
              }
              <span class="skill-name">${s.name}</span>
              <span class="skill-level">${s.level}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function initTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;

  grid.innerHTML = portfolioData.testimonials.map((t, i) => `
    <div class="testimonial-card" data-reveal data-delay="${(i + 1) * 100}">
      <p class="testimonial-quote">"${t.quote}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.name.charAt(0)}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function initStats() {
  const statNumbers = $$('.stat-number');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => observer.observe(el));
}

function animateCounter(el, target) {
  let current = 0;
  const increment = Math.ceil(target / 40);
  const duration = 1500;
  const stepTime = duration / 40;

  function tick() {
    current += increment;
    if (current >= target) {
      el.textContent = target + (el.dataset.countSuffix || '+');
      return;
    }
    el.textContent = current;
    setTimeout(tick, stepTime);
  }
  tick();
}
