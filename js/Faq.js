document.querySelectorAll('.faq__question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq__item');
        const isOpen = item.classList.contains('faq__item--open');

        document.querySelectorAll('.faq__item').forEach(i => {
          i.classList.remove('faq__item--open');
          i.querySelector('.faq__icon').textContent = '+';
          i.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          item.classList.add('faq__item--open');
          btn.querySelector('.faq__icon').textContent = '−';
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });