function ejecuta() {
    var z = document.getElementsByClassName("importante")[0].onclick = saludo;

}

function saludo() {
    alert("Hola ¿Qué hay de nuevo?");
}
window.onload = ejecuta;