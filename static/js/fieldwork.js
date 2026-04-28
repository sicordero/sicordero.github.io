function initFieldworkMap() {
  const el = document.getElementById("fieldwork-map");
  if (!el) return;

  if (typeof L === "undefined") {
    console.error("Leaflet not loaded");
    return;
  }

  const map = L.map(el).setView([20, 0], 2);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const locations = [
    ["Trim, Ireland", 53.555, -6.791],
    ["McMurdo Station, Antarctica", -77.85, 166.67],
    ["Menorca, Spain", 39.95, 4.11],
    ["Saratoga Springs, NY", 43.0831, -73.7846]
  ];

  const bounds = [];

  locations.forEach(([name, lat, lng]) => {
    L.marker([lat, lng]).addTo(map).bindPopup(name);
    bounds.push([lat, lng]);
  });

  map.fitBounds(bounds, { padding: [50, 50] });
}

window.addEventListener("load", initFieldworkMap);