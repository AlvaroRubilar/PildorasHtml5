function ejecuta() {
//    document.querySelector("#principal p:last-child").onclick=saludo;
    var elementos=document.querySelectorAll("#principal p")[0].onclick=saludo;
}

function saludo() {
    alert("Hola ¿Qué hay de nuevo?");
}
window.onload = ejecuta;