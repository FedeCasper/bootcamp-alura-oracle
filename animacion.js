let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function dibujarCircunferencia(x, y, radio) {

     pincel.fillStyle = "blueviolet";
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
     } else if (x < 0) {
          sentido = 1;
     }

     dibujarCircunferencia(x, 20, 10);
     x = x + sentido;
}

setInterval(actualizarPantalla, 10)

// dibujarCircunferencia(10,10,20)