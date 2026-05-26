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
              <i data-lucide="github"></i> GitHub
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
    nextBtn.disabled = currentPage >= totalPages;
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
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
