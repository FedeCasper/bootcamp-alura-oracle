function sorteoNumero(num){
     return Math.round(Math.random()*num)
}

var numeroIncognito = sorteoNumero(10);
var intentoDeAdivinar = 0;
var intento = 1;

while(intentoDeAdivinar != numeroIncognito && intento < 4){
     intentoDeAdivinar = parseInt(prompt("Ingrese un número, este es su intento nro. " + intento))
     if(intentoDeAdivinar == numeroIncognito){
          alert("Felicitaciones ud. adivinó el número " + numeroIncognito)
          break;
     } else {
          if(intento == 3){
               alert("Ud realizó los 3 intento, el núumero era " + numeroIncognito)
          }else{
               alert("Intente nuevamente")
          }
     }
     intento++
}