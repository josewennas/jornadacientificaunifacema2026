// script.js
const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');

if (hamburguer && menu) {
  hamburguer.addEventListener('click', (e) => {
    const isExpanded = hamburguer.getAttribute('aria-expanded') === 'true';
    hamburguer.setAttribute('aria-expanded', String(!isExpanded));
    hamburguer.classList.toggle('active');
    menu.classList.toggle('ativo');
  });

  // Fecha o menu ao clicar em qualquer link do menu
  document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
      hamburguer.classList.remove('active');
      menu.classList.remove('ativo');
      hamburguer.setAttribute('aria-expanded', 'false');
    });
  });

  // Fecha ao clicar fora do menu/hamburguer
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!menu.contains(target) && !hamburguer.contains(target)) {
      if (menu.classList.contains('ativo')) {
        menu.classList.remove('ativo');
        hamburguer.classList.remove('active');
        hamburguer.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Fecha com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('ativo')) {
      menu.classList.remove('ativo');
      hamburguer.classList.remove('active');
      hamburguer.setAttribute('aria-expanded', 'false');
    }
  });
}