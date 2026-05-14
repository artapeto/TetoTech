document.addEventListener('DOMContentLoaded', () => {
  const totalFones = 9;

  document.querySelectorAll('.catalog__card').forEach(card => {
    const random = Math.floor(Math.random() * totalFones) + 1;
    card.style.backgroundImage = `url(../images/catalog/fones/fon_${random}.png)`;
  });
});