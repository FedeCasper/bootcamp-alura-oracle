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

let contador = 0;
while(contador < 800){
     dibujarCuadrado(contador,0, "cyan", "black")
     dibujarCuadrado(contador,50, "blueviolet", "black")
     dibujarCuadrado(contador,100, "blue", "black")
     contador = contador + 50
}


