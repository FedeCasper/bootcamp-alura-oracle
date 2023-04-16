// Documentación
// https://developer.mozilla.org/en-US/docs/web/api/canvasrenderingcontext2d

function dibujarCuadrado(x,y, color, borde) {

     const pantalla = document.querySelector('canvas');
     let pincel = pantalla.getContext('2d');
     pincel.fillStyle = `${color}`;
     pincel.fillRect(x, y, 50, 50);
     pincel.strokeStyle = `${borde}`
     pincel.strokeRect(x, y, 50, 50);

}

dibujarCuadrado(0,0, "cyan", "black")
dibujarCuadrado(50,0, "lightblue")
dibujarCuadrado(100,0, "blue")
dibujarCuadrado(0,50,"red")
dibujarCuadrado(0,100, "yellow")
dibujarCuadrado(0,150, "green")





