const videosBase = [
    {
        title: "Speedrun mundial",
        streamer: "ProGamer_Alex",
        game: "Dark Souls III",
        views: "15.2K",
        img: "img/ds3.jpg"
    },
    {
        title: "Explorando el mapa",
        streamer: "Luna_Gaming",
        game: "TOTK",
        views: "8.5K",
        img: "img/zelda.jpg"
    },
    {
        title: "Torneo final",
        streamer: "ElMaestroFIFA",
        game: "FIFA 24",
        views: "12.8K",
        img: "img/fifa.jpg"
    }
];

const categoryConfig = {
    aventura: 2,
    accion: 1,
    estrategia: 1,
    rpg: 3,
    deportes: 1,
    indie: 2
};

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("cat") || "aventura";

    document.getElementById("category-title").textContent =
        cat.charAt(0).toUpperCase() + cat.slice(1);

    const total = categoryConfig[cat];
    const selectedVideos = videosBase.slice(0, total);

    const container = document.getElementById("videos-container");

    container.innerHTML = selectedVideos
        .map((v, i) => `
        <div class="col-md-4">
            <a href="video.html?id=${i}" class="text-decoration-none text-white">
                <div class="stream-card">
                    <img src="${v.img}" class="stream-thumb">
                    <span class="live-tag badge bg-danger">LIVE</span>
                    <div class="stream-info p-3">
                        <h5 class="fw-bold">${v.title}</h5>
                        <p class="small">${v.streamer} · ${v.game}</p>
                        <span class="views small">🔴 ${v.views}</span>
                    </div>
                </div>
            </a>
        </div>
    `)
        .join("");
});