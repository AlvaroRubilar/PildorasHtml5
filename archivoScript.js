function ejecuta(){
    for (let i = 0; i < 3; i++) {
        
        document.getElementsByTagName("p")[i].onclick=saludo;
        
    }

}

function saludo() {
    alert("Hola ¿Qué hay de nuevo?"); 
}
window.onload=ejecuta;