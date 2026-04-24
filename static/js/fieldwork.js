function initFieldworkMap() {
  const el = document.getElementById("fieldwork-map");
  const dataEl = document.getElementById("fieldwork-data");

  if (!el || !dataEl || typeof L === "undefined") return;

  let locations = [];

  try {
    locations = JSON.parse(dataEl.textContent);
  } catch (e) {
    console.error("Invalid fieldwork data", e);
    return;
  }

  const map = L.map(el).setView([20, 0], 2);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const bounds = [];

  locations.forEach(loc => {
    const marker = L.marker([loc.lat, loc.lng])
      .addTo(map)
      .bindPopup(`<b>${loc.title}</b>`);

    bounds.push([loc.lat, loc.lng]);
  });

  if (bounds.length) {
    map.fitBounds(bounds, { padding: [60, 60] });
  }

  setTimeout(() => map.invalidateSize(), 200);
}

window.addEventListener("load", initFieldworkMap);