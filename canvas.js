const pantalla = document.querySelector('canvas');
let pincel = pantalla.getContext('2d');
pincel.fillStyle = "lightgrey"
pincel.fillRect(0,0, 600, 800)

pincel.fillStyle = "white"
pincel.fillRect(0,0, 800, 600)

pincel.fillStyle = "dodgerblue"
pincel.fillRect(0,0, 800, 200)

pincel.fillStyle = "dodgerblue"
pincel.fillRect(0,400, 800, 200)



