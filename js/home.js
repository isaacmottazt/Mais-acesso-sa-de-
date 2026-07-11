// ==========================================================================
// Mais Acesso + Saúde — Navegação (compartilhado entre as páginas internas)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navItems = document.querySelectorAll('.nav-item');

  // Menu hambúrguer (mobile)
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Fecha o menu mobile ao redimensionar para desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 760) {
        navMenu.classList.remove('open');
      }
    });
  }

  // Fecha o menu no mobile ao escolher uma página (a navegação real
  // acontece pelo próprio link href)
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navMenu && window.innerWidth <= 760) {
        navMenu.classList.remove('open');
      }
    });
  });
});
