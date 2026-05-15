// Minimal JS placeholder: navigation highlights or future lightbox additions.
document.addEventListener('DOMContentLoaded', () => {
  // highlight nav based on filename (simple)
  const links = document.querySelectorAll('.main-nav a');
  links.forEach(a => {
    if (a.href.split('/').pop() === location.pathname.split('/').pop()) {
      a.classList.add('active');
    }
  });
});