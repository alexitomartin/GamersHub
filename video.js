// —— LISTA DE STREAMS ——
// Ahora cada vídeo puede ser HLS (.m3u8)
const videosBase = [
    {
        id: 0,
        title: "Speedrun mundial",
        streamer: "ProGamer_Alex",
        game: "Dark Souls III",
        img: "img/alex.jpg",
        video: "streams/ds3.m3u8",
        description: "Alex intenta batir el récord mundial de Dark Souls III...",
        comments: ["Qué guay", "El despertar de Aurora", "Alex siempre rompiendo récords."]
    },
    {
        id: 1,
        title: "Explorando el mapa",
        streamer: "Luna_Gaming",
        game: "TOTK",
        img: "img/luna.jpg",
        video: "streams/zelda.m3u8",
        description: "Acompaña a Luna mientras descubre secretos ocultos...",
        comments: ["El paisaje es precioso 😍", "Luna siempre encuentra los secretos."]
    },
    {
        id: 2,
        title: "Torneo final",
        streamer: "ElMaestroFIFA",
        game: "FIFA 24",
        img: "img/fifa.jpg",
        video: "streams/fifa.m3u8",
        description: "Partida decisiva del torneo internacional...",
        comments: ["Golazo en el 90 ⚽🔥", "Este torneo está muy tenso."]
    }
];

// —— CARGAR VIDEO SEGÚN ID —— 
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id")) || 0;
    const v = videosBase[id];

    const videoEl = document.getElementById("video-player");

    // —— SOPORTE HLS —— 
    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(v.video);
        hls.attachMedia(videoEl);
        hls.on(Hls.Events.MANIFEST_PARSED, () => videoEl.play());
    } else if (videoEl.canPlayType("application/vnd.apple.mpegurl")) {
        // Safari lo soporta nativo
        videoEl.src = v.video;
        videoEl.play();
    }

    // —— INFO DEL VIDEO —— 
    document.getElementById("video-title").textContent = v.title;
    document.getElementById("video-avatar").src = v.img;
    document.getElementById("video-streamer").textContent = v.streamer;
    document.getElementById("video-game").textContent = v.game;
    document.getElementById("video-description").textContent = v.description;

    // —— COMENTARIOS —— 
    const box = document.getElementById("comments-box");
    v.comments.forEach(c => box.innerHTML += `<p class="comment">${c}</p>`);

    // —— ENVIAR COMENTARIO —— 
    document.getElementById("comment-btn").addEventListener("click", () => {
        const input = document.getElementById("comment-input");
        if (input.value.trim() === "") return;

        box.innerHTML += `<p class='comment'>${input.value}</p>`;
        input.value = "";
    });
});