function initFieldworkMap() {
  const el = document.getElementById("fieldwork-map");
  if (!el || typeof L === "undefined") return;

  // Create map
  const map = L.map(el).setView([20, 0], 2);

  // Base layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 18
  }).addTo(map);

  // Pull all fieldwork items from Hugo-rendered DOM
  const items = document.querySelectorAll(".fieldwork-item");

  const bounds = [];
  let hasPoints = false;

  items.forEach((item) => {
    const lat = parseFloat(item.dataset.lat);
    const lng = parseFloat(item.dataset.lng);
    const title = item.dataset.title || "Fieldwork Site";

    if (!isNaN(lat) && !isNaN(lng)) {
      hasPoints = true;

      const marker = L.marker([lat, lng])
        .addTo(map)
        .bindPopup(`<b>${title}</b>`);

      bounds.push([lat, lng]);
    }
  });

  // Fit map to markers if we have any
  if (hasPoints) {
    map.fitBounds(bounds, {
      padding: [60, 60]
    });
  }

  // Fix for Hugo Blox / hidden layout rendering
  setTimeout(() => {
    map.invalidateSize();
  }, 150);
}

// Ensure DOM + Leaflet are ready
window.addEventListener("load", initFieldworkMap);