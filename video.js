const videosBase = [
    {
        id: 0,
        title: "Speedrun mundial",
        streamer: "ProGamer_Alex",
        game: "Dark Souls III",
        img: "img/alex.jpg",
        video: "vid/ds3.mp4",
        description: "Alex intenta batir el récord mundial de Dark Souls III con una ruta ultra agresiva. Estrategias avanzadas, esquivas perfectas y cero margen de error.",
        comments: [
            "Qué guay",
            "El despertar de Aurora",
            "Alex siempre rompiendo récords."
        ]
    },
    {
        id: 1,
        title: "Explorando el mapa",
        streamer: "Luna_Gaming",
        game: "TOTK",
        img: "img/luna.jpg",
        video: "vid/zelda.mp4",
        description: "Acompaña a Luna mientras descubre secretos ocultos en el inmenso mundo de Tears of the Kingdom. Rutas alternativas, cuevas ocultas y zonas misteriosas.",
        comments: [
            "El paisaje es precioso 😍",
            "Luna siempre encuentra los secretos."
        ]
    },
    {
        id: 2,
        title: "Torneo final",
        streamer: "ElMaestroFIFA",
        game: "FIFA 24",
        img: "img/fifa.jpg",
        video: "vid/fifa.mp4",
        description: "Partida decisiva del torneo internacional en FIFA 24. Tácticas avanzadas, presión alta y jugadas increíbles al borde del infarto.",
        comments: [
            "Golazo en el minuto 90 ⚽🔥",
            "Este torneo está muy tenso."
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const v = videosBase[id];

    // CARGAR VIDEO E INFO
    document.getElementById("video-player").src = v.video;
    document.getElementById("video-title").textContent = v.title;
    document.getElementById("video-avatar").src = v.img;
    document.getElementById("video-streamer").textContent = v.streamer;
    document.getElementById("video-game").textContent = v.game;
    document.getElementById("video-description").textContent = v.description;

    // CARGAR COMENTARIOS
    const box = document.getElementById("comments-box");
    v.comments.forEach(c => box.innerHTML += `<p class="comment">${c}</p>`);

    // AÑADIR NUEVO COMENTARIO
    document.getElementById("comment-btn").addEventListener("click", () => {
        const input = document.getElementById("comment-input");
        if (input.value.trim() === "") return;

        box.innerHTML += `<p class="comment">${input.value}</p>`;
        input.value = "";
    });
});