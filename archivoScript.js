function ejecuta(){
    document.getElementsByTagName("p")[0].onclick=saludo;
}

function saludo() {
    alert("Hola ¿Qué hay de nuevo?"); 
}
window.onload=ejecuta;