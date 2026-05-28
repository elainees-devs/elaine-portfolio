function initProjects() {
  const grid = $('.projects-grid');
  const filterBtns = $$('.filter-btn');
  const sortSelect = $('.sort-select');
  const prevBtn = $('.pagination-btn.prev');
  const nextBtn = $('.pagination-btn.next');
  const pageInfo = $('.pagination-info');

  let currentFilter = 'All';
  let currentSort = 'latest';
  let currentPage = 1;
  const perPage = 3;

  function getFiltered() {
    let items = [...portfolioData.projects];
    if (currentFilter !== 'All') {
      items = items.filter(p => p.category.includes(currentFilter));
    }
    return items;
  }

  function sortItems(items) {
    const sorted = [...items];
    switch (currentSort) {
      case 'az':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'latest':
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'complexity':
        sorted.sort((a, b) => b.complexity - a.complexity);
        break;
    }
    return sorted;
  }

  function render() {
    const filtered = getFiltered();
    const sorted = sortItems(filtered);
    const totalPages = Math.ceil(sorted.length / perPage) || 1;

    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * perPage;
    const pageItems = sorted.slice(start, start + perPage);

    grid.innerHTML = pageItems.map(p => `
      <article class="project-card" data-reveal>
        <div class="project-image">
          ${p.image
            ? `<img src="${p.image}" alt="${p.title}" loading="lazy">`
            : `<i data-lucide="folder-code"></i>`
          }
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-description">${p.description}</p>
          <div class="project-tech">
            ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${p.github}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.501.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg> GitHub
            </a>
            ${p.demo ? `<a href="${p.demo}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <i data-lucide="external-link"></i> Live Demo
            </a>` : ''}
          </div>
        </div>
      </article>
    `).join('');

    lucide.createIcons();
    initScrollAnimations();

    prevBtn.disabled = currentPage <= 1;
    prevBtn.setAttribute('aria-disabled', currentPage <= 1);
    nextBtn.disabled = currentPage >= totalPages;
    nextBtn.setAttribute('aria-disabled', currentPage >= totalPages);
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

    const firstCard = grid.querySelector('.project-card');
    if (firstCard) { firstCard.setAttribute('tabindex', '-1'); firstCard.focus(); }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      currentPage = 1;
      render();
    });
  });

  sortSelect.addEventListener('change', () => {
    currentSort = sortSelect.value;
    currentPage = 1;
    render();
  });

  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      render();
    }
  });

  nextBtn.addEventListener('click', () => {
    currentPage++;
    render();
  });

  render();
}
