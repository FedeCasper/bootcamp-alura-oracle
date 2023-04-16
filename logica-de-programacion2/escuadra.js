const pantalla = document.querySelector('canvas');
let pincel = pantalla.getContext('2d');


pincel.fillStyle = "darkorange";
pincel.beginPath()
pincel.moveTo(50,50)
pincel.lineTo(50,400)
pincel.lineTo(400,400)
pincel.lineTo(50,50)
pincel.fill()

pincel.fillStyle = "blueviolet";
pincel.beginPath()
pincel.moveTo(100,175)
pincel.lineTo(100,350)
pincel.lineTo(275,350)
pincel.lineTo(100,175)
pincel.fill()
