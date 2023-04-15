
var fechaActual = 2023;

function imprimir(frase) {
     document.write("<big>" + frase  + "</big>")
     saltarLineas()
}

function saltarLineas() {
     document.write("<br><br><br><hr><br><br>")
}

imprimir("Barto tiene: " + (fechaActual - 2021) + " años")
imprimir("Indi tiene: " + (fechaActual - 2022) + " años")
imprimir("Moco tiene: " + (fechaActual - 2019) + " años")