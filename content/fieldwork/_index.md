---
title: Fieldwork
summary: Archaeological and Geophysical field experience I've completed throughout my career.
type: page
design:
  sidebar: false
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">

<div id="map" style="height:700px; max-width: 1400px; margin: 0 auto; border-radius: 16px;"></div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const map = L.map('map').setView([20, 0], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);

  const locations = [
    ["Trim", 53.555, -6.791],
    ["Antarctica", -77.85, 166.67],
    ["Menorca", 39.95, 4.11],
    ["New York", 43.0831, -73.7846]
  ];

  locations.forEach(([name, lat, lng]) => {
    L.marker([lat, lng]).addTo(map).bindPopup(name);
  });
});
</script>
---
- sections:
  - block: markdown
    content:
      text: |
        [View Fieldwork Map](/fieldwork-map/)
  - block: collection
    content:
      title: Fieldwork Projects
      filters:
        folders:
          - fieldwork
    design:
      view: card
      columns: 1 -->
---