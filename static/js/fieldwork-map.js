async function initFieldworkMap() {
  const el = document.getElementById("fieldwork-map");
  if (!el || typeof L === "undefined") return;

  const map = L.map(el, {
    scrollWheelZoom: false
  }).setView([20, 0], 2);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  // Pull data from Hugo JSON injection
  const dataScript = document.getElementById("fieldwork-data");
  if (!dataScript) return;

  const locations = JSON.parse(dataScript.textContent);

  const bounds = [];

  locations.forEach(loc => {
    if (!loc.lat || !loc.lng) return;

    L.marker([loc.lat, loc.lng])
      .addTo(map)
      .bindPopup(loc.name);

    bounds.push([loc.lat, loc.lng]);
  });

  if (bounds.length) {
    map.fitBounds(bounds, { padding: [60, 60] });
  }
}

window.addEventListener("load", initFieldworkMap);