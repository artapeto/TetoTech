    function sortProducts(order) {
      const list = document.getElementById('product-list');
      const cards = Array.from(list.querySelectorAll('.product-card'));
 
      cards.sort((a, b) => {
        const priceA = parseInt(a.dataset.price);
        const priceB = parseInt(b.dataset.price);
        return order === 'asc' ? priceA - priceB : priceB - priceA;
      });

      setTimeout(() => {
        cards.forEach(card => list.appendChild(card));
        cards.forEach(card => {
          card.style.opacity = '1';
        });
      }, 160);
 
      // Update active button
      document.getElementById('sort-asc').classList.toggle('active', order === 'asc');
      document.getElementById('sort-desc').classList.toggle('active', order === 'desc');
    }
 
    // Default: sort asc on load
    sortProducts('asc');