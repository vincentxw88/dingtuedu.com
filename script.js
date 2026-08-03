document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuToggle && nav) menuToggle.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(opened));
  });

  const filters = document.querySelectorAll('.filter');
  const groups = document.querySelectorAll('.course-group');
  filters.forEach((button) => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => item.classList.toggle('active', item === button));
    groups.forEach((group) => group.classList.toggle('is-hidden', filter !== 'all' && group.dataset.group !== filter));
  }));
});
