---
title: Fieldwork
summary: Archaeological and Geophysical field experience I've completed throughout my career.
type: page
design:
  sidebar: false
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">

<div id="map-container">
  <div id="map-hint">Click map to zoom</div>
  <div id="map"></div>
</div>

<style>
#map-container {
  position: relative;
}

#map {
  width: 100vw;
  height: 500px;
  margin-left: calc(-50vw + 50%);
}

/* UX hint */
#map-hint {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.65);
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 14px;
  z-index: 1000;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
</style>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<script>
document.addEventListener("DOMContentLoaded", function () {
  // 👇 disable scroll zoom initially (fixes scroll trap)
  const map = L.map('map', {
    scrollWheelZoom: false
  });

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

  // Fit map to all points
  map.fitBounds(bounds, {
    padding: [40, 40],
    maxZoom: 3
  });

  const hint = document.getElementById("map-hint");

  // 👇 enable zoom ONLY after click
  map.on('click', function () {
    map.scrollWheelZoom.enable();

    if (hint) {
      hint.style.opacity = "0";
    }
  });

  // 👇 disable again when leaving map (prevents trap)
  map.on('mouseout', function () {
    map.scrollWheelZoom.disable();

    if (hint) {
      hint.style.opacity = "1";
    }
  });
});
</script>
---
