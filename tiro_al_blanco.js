var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");		
pincel.fillStyle = "lightgrey";
pincel.fillRect(0,0,600,400); 

var radio = 10;
var xAleatorio;
var yAleatorio;

function disenharCircunferencia(x,y,radio, color){
     pincel.fillStyle = color;
     pincel.beginPath();
     pincel.arc(x,y,radio,0,2*Math.PI);
     pincel.fill();
}	

function limpiarPantalla(){

     pincel.clearRect(0,0,600,400);

}

var x = 0


function disenharObjetivo(x,y){

     disenharCircunferencia(x,y,radio + 20,"red");
     disenharCircunferencia(x,y,radio + 10,"white");
     disenharCircunferencia(x,y,radio,"red");
}


function sortearPosicion(maximo){

     return Math.floor(Math.random()*maximo);

}


function actualizarPantalla(){

     limpiarPantalla();
     xAleatorio = sortearPosicion(600);
     yAleatorio = sortearPosicion(400);
     disenharObjetivo(xAleatorio,yAleatorio);
     x++;
}

setInterval(actualizarPantalla,1000);

function disparar(evento){

     var x = evento.pageX - pantalla.offsetLeft;
     var y = evento.pageY - pantalla.offsetTop;

     if ((x < xAleatorio + radio) && 
          (x > xAleatorio - radio) &&
          (y < yAleatorio + radio) &&
          (y > yAleatorio - radio) ) {
          alert("Tiro Certero");
     }
}

pantalla.onclick = disparar;