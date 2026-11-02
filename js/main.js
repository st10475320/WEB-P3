// Accordion Logic
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.classList.toggle('open');
    header.querySelector('span').textContent = content.classList.contains('open') ? '-' : '+';
  });
});

// Leaflet Map Setup (Contact Page)
if (document.getElementById('map')) {
  // Coordinates for Woolworths HQ (Cape Town)
  const map = L.map('map').setView([-33.9249, 18.4241], 13);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([-33.9249, 18.4241]).addTo(map)
    .bindPopup('<b>Woolworths Head Office</b><br>Cape Town, South Africa')
    .openPopup();
}