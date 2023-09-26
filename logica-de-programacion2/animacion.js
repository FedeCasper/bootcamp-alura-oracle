let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function dibujarCircunferencia(x, y, radio) {

     pincel.beginPath();
     pincel.arc(x, y, radio, 0, 2 * Math.PI)
     pincel.fill()

}

function limpiarPantalla() {
     pincel.clearRect(0, 0, 600, 400)
}

var x = 0
var sentido = 1;

function actualizarPantalla() {

     limpiarPantalla();
     if (x > 590) {
          sentido = -1;
          pincel.fillStyle = "blueviolet";
     } else if (x < 0) {
          sentido = 1;
          pincel.fillStyle = "red";
     }

     dibujarCircunferencia(x, 20, 10);
     x = x + sentido;
}

setInterval(actualizarPantalla, 5)

// dibujarCircunferencia(10,10,20)