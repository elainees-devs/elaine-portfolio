function initTypingAnimation() {
  const el = $('#typing-text');
  if (!el) return;

  const phrases = [
    'Full Stack Engineer',
    'Backend-focused problem solver',
    'Scalable systems builder'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  function type() {
    const current = phrases[phraseIndex];
    const display = isDeleting
      ? current.substring(0, charIndex--)
      : current.substring(0, charIndex++);

    el.textContent = display;

    if (!isDeleting && charIndex === current.length + 1) {
      isPaused = true;
      setTimeout(() => {
        isPaused = false;
        isDeleting = true;
        type();
      }, 2000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    if (!isPaused) {
      const speed = isDeleting ? 40 : 80;
      setTimeout(type, speed);
    }
  }

  type();
}

function initParticles() {
  const container = $('.hero-particles');
  if (!container) return;

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (10 + Math.random() * 20) + 's';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.width = (2 + Math.random() * 4) + 'px';
    particle.style.height = particle.style.width;
    particle.style.opacity = 0.1 + Math.random() * 0.3;
    container.appendChild(particle);
  }
}
