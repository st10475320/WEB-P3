// Sample Products Array
const products = [
  { id: 1, name: "Organic Fairtrade Coffee", category: "Food", price: 129.99, image: "https://via.placeholder.com/250?text=Organic+Coffee" },
  { id: 2, name: "Slim Fit Cotton Chinos", category: "Fashion", price: 499.00, image: "https://via.placeholder.com/250?text=Cotton+Chinos" },
  { id: 3, name: "Egyptian Cotton Duvet Cover", category: "Home", price: 899.50, image: "https://via.placeholder.com/250?text=Duvet+Cover" },
  { id: 4, name: "Free Range Eggs 12 Pack", category: "Food", price: 54.99, image: "https://via.placeholder.com/250?text=Free+Range+Eggs" }
];

const grid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortSelect = document.getElementById('sortSelect');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function renderProducts() {
  let filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchInput.value.toLowerCase());
    const matchesCategory = categoryFilter.value === 'all' || p.category === categoryFilter.value;
    return matchesSearch && matchesCategory;
  });

  if (sortSelect.value === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}" class="gallery-img">
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p><strong>R ${p.price.toFixed(2)}</strong></p>
    </div>
  `).join('');

  // Attach Lightbox Events
  document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
    });
  });
}

if (grid) {
  searchInput.addEventListener('input', renderProducts);
  categoryFilter.addEventListener('change', renderProducts);
  sortSelect.addEventListener('change', renderProducts);
  renderProducts();
}

if (lightbox) {
  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
}