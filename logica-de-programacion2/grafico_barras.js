function dibujarRectangulo(x, y, base, altura, color) {
     var pantalla = document.querySelector("canvas");
     var pincel = pantalla.getContext("2d");

     pincel.fillStyle = color;
     pincel.fillRect(x, y, base, altura);
     pincel.strokeStyle = "black";
     pincel.strokeRect(x, y, base, altura);
}

function escribirTexto(x, y, texto) {
     var pantalla = document.querySelector("canvas");
     var pincel = pantalla.getContext("2d");

     pincel.font = "15px Georgia";
     pincel.fillStyle = "black";
     pincel.fillText(texto, x, y);
}

var serie2009 = [16, 47, 41, 13, 3];
var serie2019 = [81, 9, 3, 3, 4];

var colores = ["blue","green","yellow", "red","gray"];


function dibujarBarra(x,y,arrayFecha, arrayColores, año){

     let sumarAltura = 0;
     for(let i = 0 ; i <= arrayFecha.length ; i++){
          console.log(arrayFecha[i]);

               let altura = arrayFecha[i]
               dibujarRectangulo(x, sumarAltura, 50, arrayFecha[i], arrayColores[i])
               sumarAltura = sumarAltura + altura

               console.log({  valorX: x,
                              valorY:  y+arrayFecha[i],
                              ancho: 50,
                              valorFecha: arrayFecha[i],
                              color: arrayColores[i]}); 

     }

}
dibujarBarra(50,0,serie2009,colores,2009)


