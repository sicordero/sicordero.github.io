---
title: Fieldwork
summary: Archaeological and Geophysical field experience I've completed throughout my career.
type: page
design:
  sidebar: false
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">

<style>
#map-container {
  position: relative;
}

#map {
  width: 100%;
  height: 550px;
  border-radius: 12px;
}

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

<div id="map-container">
  <div id="map-hint">Click map to enable zoom</div>
  <div id="map"></div>
</div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const map = L.map('map', {
    scrollWheelZoom: false   // disabled by default
  });

  // Base tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);

  // Locations
  const locations = [
    ["Trim, Ireland", 53.555, -6.791],
    ["McMurdo Station, Antarctica", -77.85, 166.67],
    ["Menorca, Spain", 39.95, 4.11],
    ["Saratoga Springs, NY", 43.0831, -73.7846]
  ];

  const bounds = [];

  locations.forEach(([name, lat, lng]) => {
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(`<b>${name}</b>`);

    bounds.push([lat, lng]);
  });

  // Fit map to all markers
  map.fitBounds(bounds, {
    padding: [40, 40],
    maxZoom: 3
  });

  const hint = document.getElementById("map-hint");

  // Enable zoom on click
  map.on('click', function () {
    map.scrollWheelZoom.enable();

    if (hint) {
      hint.style.opacity = "0";
      setTimeout(() => hint.style.display = "none", 300);
    }
  });

  // Disable zoom when leaving map (preventing scroll trap!!)
  map.on('mouseout', function () {
    map.scrollWheelZoom.disable();

    if (hint) {
      hint.style.display = "block";
      setTimeout(() => hint.style.opacity = "1", 10);
    }
  });
});
</script>

---