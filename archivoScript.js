function ejecuta() {
//    document.querySelector("#principal p:last-child").onclick=saludo;
var elementos=document.querySelectorAll("#principal p");
for (let i = 0; i <elementos.length ; i++) {
    
    elementos[i].onclick;
    
}
}

function saludo() {
    alert("Hola ¿Qué hay de nuevo?");
}
window.onload = ejecuta;