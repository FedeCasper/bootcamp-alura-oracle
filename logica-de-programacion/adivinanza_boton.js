function numeroAleatorio(num){
     return Math.round(Math.random()*num)
}
let numeroIncognito = numeroAleatorio(10)
console.log(numeroIncognito);
let input = document.querySelector('input')
let boton = document.querySelector('button')
console.log(boton);
let intento = 1;

function imprimir (){
     if( numeroIncognito === parseInt(input.value)){
          alert("acertaste intento nro. " + intento);
     }else{
          alert("pifiaste intento nro. " + intento);
          if(intento == 3){
               alert("Perdiste, hiciste 3 intentos, el numero era " + numeroIncognito)
               boton.disabled = true
          }
     }
     intento++
}

boton.onclick = imprimir