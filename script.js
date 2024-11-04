// Initialisation de la carte Leaflet
document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('map').setView([20.0, 0.0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    const regions = [
        { name: "Équateur", coords: [-1.8312, -78.1834] },
        { name: "Brésil", coords: [-14.2350, -51.9253] },
        { name: "Inde", coords: [20.5937, 78.9629] },
        { name: "Philippines", coords: [12.8797, 121.7740] },
        { name: "Thaïlande", coords: [15.8700, 100.9925] }
    ];

    regions.forEach(region => {
        L.marker(region.coords).addTo(map)
            .bindPopup(`<b>${region.name}</b><br>Région productrice.`);
    });
});
