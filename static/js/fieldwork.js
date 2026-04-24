function initFieldworkMap() {
  const el = document.getElementById("fieldwork-map");
  const dataEl = document.getElementById("fieldwork-data");

  if (!el || !dataEl || typeof L === "undefined") return;

  let locations = [];

  try {
    locations = JSON.parse(dataEl.textContent);
  } catch (e) {
    console.error("Invalid fieldwork JSON", e);
    return;
  }

  if (!locations.length) return;

  const map = L.map(el, {
    scrollWheelZoom: false
  }).setView([20, 0], 2);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 18
  }).addTo(map);

  const bounds = [];

  locations.forEach(loc => {
    if (!loc.lat || !loc.lng) return;

    const marker = L.marker([loc.lat, loc.lng]).addTo(map);

    marker.bindPopup(`
      <strong>${loc.title}</strong><br>
      ${loc.location || ""}<br>
      <a href="${loc.url}">View Project</a>
    `);

    bounds.push([loc.lat, loc.lng]);
  });

  if (bounds.length) {
    map.fitBounds(bounds, { padding: [60, 60] });
  }

  // Fix rendering issues (critical for Hugo layouts)
  setTimeout(() => map.invalidateSize(), 200);
}

// robust loader (prevents race conditions)
function waitForLeaflet(callback) {
  if (typeof L !== "undefined") {
    callback();
  } else {
    setTimeout(() => waitForLeaflet(callback), 50);
  }
}

window.addEventListener("load", () => {
  waitForLeaflet(initFieldworkMap);
});