let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);
let colores = ["blue", "red", "green"];
let indiceColorActual = 0;

function dibujar(evento) {
     let x = evento.pageX - pantalla.offsetLeft;
     let y = evento.pageY - pantalla.offsetTop;

     console.log(evento);

     pincel.fillStyle = colores[indiceColorActual];
     pincel.beginPath()
     //posicion donde comienza en x; en y; radio; ángulo inicial; ángulo final 
     pincel.arc(x, y, 10, 0, 2 * 3.14)
     pincel.fill()
}

function alterarColor() {
     indiceColorActual++
     if(indiceColorActual>= colores.length) {
          indiceColorActual = 0; //vuelve para el primer color, blue
     }
     return false; //menú contextual padrón de `canvas` no sea exhibido
}

pantalla.onclick = dibujar
pantalla.oncontextmenu = alterarColor;