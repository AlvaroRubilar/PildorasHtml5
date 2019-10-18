function ejecuta() {
   document.querySelector(".importante").onclick=saludo;

}

function saludo() {
    alert("Hola ¿Qué hay de nuevo?");
}
window.onload = ejecuta;