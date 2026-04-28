function initFieldworkMap() {
  const el = document.getElementById("fieldwork-map");
  if (!el || typeof L === "undefined") return;

  const map = L.map(el).setView([20, 0], 2);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const locations = [
    { name: "Trim, Ireland", coords: [53.555, -6.791] },
    { name: "McMurdo Station, Antarctica", coords: [-77.85, 166.67] },
    { name: "Menorca, Spain", coords: [39.95, 4.11] },
    { name: "Saratoga Springs, NY", coords: [43.0831, -73.7846] }
  ];

  const bounds = [];

  locations.forEach(loc => {
    L.marker(loc.coords)
      .addTo(map)
      .bindPopup(`<b>${loc.name}</b>`);

    bounds.push(loc.coords);
  });

  map.fitBounds(bounds, { padding: [50, 50] });
}

window.addEventListener("load", initFieldworkMap);