var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

pincel.fillStyle = 'red';
pincel.fillRect(0, 0, 50, 50);
pincel.fillStyle = 'green';
pincel.fillRect(50, 0, 50, 50);
pincel.fillStyle = 'blue';
pincel.fillRect(100, 0, 50, 50);

var puedoDibujar = false;

function dibujarCirculo(evento) {

     if (puedoDibujar) {
          var x = evento.pageX - pantalla.offsetLeft;
          var y = evento.pageY - pantalla.offsetTop;
          pincel.beginPath();
          pincel.arc(x, y, 5, 0, 2 * 3.14);
          pincel.fill();
     }

}

function elegirColor(evento){
     if((evento.pageX > 0 && evento.pageX < 50) && (evento.pageY > 0 && evento.pageY < 50)){
          pincel.fillStyle = 'red';
     }else if((evento.pageX > 50 && evento.pageX < 100) && (evento.pageY > 0 && evento.pageY < 50)){
          pincel.fillStyle = 'green';
     }else if((evento.pageX > 100 && evento.pageX < 150) && (evento.pageY > 0 && evento.pageY < 50)){
          pincel.fillStyle = 'blue';
     }
}
pantalla.onclick = elegirColor

pantalla.onmousemove = dibujarCirculo;

function habilitarDibujar() {

     puedoDibujar = true;
}

function deshabilitarDibujar() {

     puedoDibujar = false;
}

pantalla.onmousedown = habilitarDibujar;

pantalla.onmouseup = deshabilitarDibujar;