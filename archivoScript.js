function ejecuta(){
    // document.getElementsByTagName("p")[2].onclick=saludo;
    document.getElementById("importante").onclick=saludo;
}

function saludo() {
    alert("Hola ¿Qué hay de nuevo?"); 
}
window.onload=ejecuta;