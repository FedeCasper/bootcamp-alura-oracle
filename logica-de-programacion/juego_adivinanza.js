function saltarLinea() {
     document.write("<br>");
     document.write("<br>");
     document.write("<br>");
}

function imprimir(frase) {
     document.write(frase);
     saltarLinea();
}

function sorteo(numero){
     return Math.round(Math.random() * numero)
}

var numeroIncognito = sorteo(17)
var numeroIngresado = parseInt(prompt("Ingrese un número"))

if(numeroIngresado < numeroIncognito){
     alert("El número oculto es mayor")
}else if(numeroIngresado > numeroIncognito){
     alert("El número oculto es menor")
}else{
     alert("Ud gano!!!!, el número era " + numeroIncognito)
}
