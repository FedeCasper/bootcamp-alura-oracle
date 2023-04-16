// Documentación
// https://developer.mozilla.org/en-US/docs/web/api/canvasrenderingcontext2d

const pantalla = document.querySelector('canvas');
let pincel = pantalla.getContext('2d');
pincel.fillStyle = "lightgrey";
pincel.fillRect(0,0, 600, 800);

pincel.fillStyle = "white";
pincel.fillRect(0,0, 800, 600);

pincel.fillStyle = "dodgerblue";
pincel.fillRect(0,0, 800, 200);

pincel.fillStyle = "dodgerblue";
pincel.fillRect(0,400, 800, 200);

// DIBUJA UN TRIANGULO
// pincel.fillStyle = "darkorange";
// pincel.beginPath();
// pincel.moveTo(300, 200)
// pincel.lineTo(300, 400)
// pincel.lineTo(500, 300)
// pincel.lineTo(300, 200)
// pincel.fill()

pincel.fillStyle = "darkorange";
pincel.beginPath();
pincel.arc(400,300, 50, 0, 2*3.14)
pincel.fill()

