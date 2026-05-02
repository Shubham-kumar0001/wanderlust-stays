
const coords = listing.geometry.coordinates; 

if (!coords || coords.length < 2) {
    document.getElementById('map').innerHTML =
        '<p class="text-muted p-3">Location not available for this listing.</p>';
} else {
    const lat = coords[1];
    const lng = coords[0];

    const map = L.map('map').setView([lat, lng], 9);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(`<h6>${listing.location}</h6><p>Exact location provided after booking.</p>`)
        .openPopup();
}
