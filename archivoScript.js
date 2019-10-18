function ejecuta() {
   document.querySelector("#principal p:last-child").onclick=saludo;

}

function saludo() {
    alert("Hola ¿Qué hay de nuevo?");
}
window.onload = ejecuta;