---
title: Fieldwork
summary: Archaeological and Geophysical field experience I've completed throughout my career.
type: page
design:
  sidebar: true
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">

<div id="map" style="height:600px; max-width: 100%; margin: 0 auto; border-radius: 12px;"></div>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<script>
document.addEventListener("DOMContentLoaded", function () {
  // Initialize map (no preset center needed)
  const map = L.map('map');

  // Base map layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);

  // Fieldwork locations
  const locations = [
    ["Trim", 53.555, -6.791],
    ["Antarctica", -77.85, 166.67],
    ["Menorca", 39.95, 4.11],
    ["New York", 43.0831, -73.7846]
  ];

  const bounds = [];

  // Add markers
  locations.forEach(([name, lat, lng]) => {
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(name);

    bounds.push([lat, lng]);
  });

  // Fit map to all points (✔ improved UX)
  map.fitBounds(bounds, {
    padding: [10, 10], // Originally 80,80 for margins
    maxZoom: 3         // prevent over-zooming (important for Antarctica)
  });
});
</script>
---
