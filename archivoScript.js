function ejecuta() {
//    document.querySelector("#principal p:last-child").onclick=saludo;
for (let i = 0; i < 4; i++) {
    
    var elementos=document.querySelectorAll("#principal p")[i].onclick=saludo;
    
}
}

function saludo() {
    alert("Hola ¿Qué hay de nuevo?");
}
window.onload = ejecuta;