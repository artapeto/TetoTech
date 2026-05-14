    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuClose = document.getElementById('menuClose');

    function openMenu() {
      mobileMenu.classList.add('is-open');
      burger.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      mobileMenu.classList.remove('is-open');
      burger.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    burger.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);

    document.querySelectorAll('.mobile-menu__nav li').forEach(li => {
      li.addEventListener('click', closeMenu);
    });