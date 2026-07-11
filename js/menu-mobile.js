/**
 * Menu Hambúrguer Mobile - Script Funcional
 * Funciona em TODAS as páginas automaticamente
 */

console.log('🔄 menu-mobile.js carregando...');

function initMenuHamburger() {
  console.log('🔍 Buscando elementos do menu...');
  
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!menuToggle || !mobileMenu) {
    console.error('❌ Elementos do menu não encontrados');
    console.log('menuToggle:', menuToggle);
    console.log('mobileMenu:', mobileMenu);
    return;
  }

  console.log('✅ Elementos encontrados!');

  // Remove listeners antigos para evitar duplicação
  const newMenuToggle = menuToggle.cloneNode(true);
  menuToggle.parentNode.replaceChild(newMenuToggle, menuToggle);
  const updatedMenuToggle = document.querySelector('.menu-toggle');
  const updatedMobileMenu = document.querySelector('.mobile-menu');

  // FUNÇÃO 1: Clique no hambúrguer
  updatedMenuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    console.log('👆 CLIQUE NO HAMBÚRGUER!');
    updatedMenuToggle.classList.toggle('active');
    updatedMobileMenu.classList.toggle('active');
    console.log('Menu ativo:', updatedMobileMenu.classList.contains('active'));
  });

  // FUNÇÃO 2: Fechar ao clicar em link
  const menuLinks = document.querySelectorAll('.mobile-menu a');
  menuLinks.forEach((link, idx) => {
    link.addEventListener('click', function() {
      console.log(`🔗 Link ${idx + 1} clicado - fechando menu`);
      updatedMenuToggle.classList.remove('active');
      updatedMobileMenu.classList.remove('active');
    });
  });

  // FUNÇÃO 3: Fechar ao clicar fora
  document.addEventListener('click', function(e) {
    if (!updatedMobileMenu.contains(e.target) && !updatedMenuToggle.contains(e.target)) {
      if (updatedMobileMenu.classList.contains('active')) {
        console.log('👆 Clique fora - fechando menu');
        updatedMenuToggle.classList.remove('active');
        updatedMobileMenu.classList.remove('active');
      }
    }
  });

  // FUNÇÃO 4: Fechar com ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && updatedMobileMenu.classList.contains('active')) {
      console.log('⌨️  ESC - fechando menu');
      updatedMenuToggle.classList.remove('active');
      updatedMobileMenu.classList.remove('active');
    }
  });

  console.log('✅✅✅ Menu Hambúrguer ATIVO! ✅✅✅');
}

// Tentar inicializar IMEDIATAMENTE se DOM já carregou
if (document.readyState === 'loading') {
  console.log('⏳ Aguardando DOM...');
  document.addEventListener('DOMContentLoaded', initMenuHamburger);
  // Também tentar depois de um pequeno delay
  setTimeout(initMenuHamburger, 100);
} else {
  console.log('✅ DOM pronto - inicializando agora');
  initMenuHamburger();
}

// Tentar inicializar novamente após 500ms (para garantir em navegações)
setTimeout(initMenuHamburger, 500);

console.log('✅ menu-mobile.js carregado COMPLETAMENTE!');


