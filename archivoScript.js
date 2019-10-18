function ejecuta() {
    for (let i = 0; i < 2; i++) {
       
        
        var z = document.getElementsByClassName("importante")[i].onclick = saludo;
    }

}

function saludo() {
    alert("Hola ¿Qué hay de nuevo?");
}
window.onload = ejecuta;