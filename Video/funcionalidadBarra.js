var miVideo, reproducir, barra, progreso, maximo;
maximo = 600;

function comenzar() {
    miVideo = document.getElementById("miVideo");
    reproducir = document.getElementById("reproducir");
    barra = document.getElementById("barra");
    progreso = document.getElementById("progreso");

    reproducir.addEventListener("click", clicando, false);
    progreso.addEventListener("click", adelantando, false);
}

function clicando() {

    if ((miVideo.paused == false) && (miVideo.ended == false)) {

        miVideo.pause();
        reproducir.innerHTML = "Play";

    } else {

        miVideo.play();
        reproducir.innerHTML = "Pause";
        bucle = setInterval(estado, 0.5);
    }

}

function estado() {
    if (miVideo.ended == false) {
        var total = parseInt(miVideo.currentTime * maximo / miVideo.duration);
        progreso.style.width = total + "px";

    }
}

window.addEventListener("load", comenzar, false);