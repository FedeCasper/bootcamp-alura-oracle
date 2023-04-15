function numeroAleatorio(num){
     return Math.round(Math.random()*num)
}
let numeroIncognito = numeroAleatorio(10)
console.log(numeroIncognito);
let input = document.querySelector('input')
input.focus()
let boton = document.querySelector('button')
let titulo = document.querySelector('h1')
console.log(boton);
let intento = 1;

function imprimir (){
     if( numeroIncognito === parseInt(input.value)){
          alert("acertaste intento nro. " + intento);
     }else{
          alert("pifiaste intento nro. " + intento);
          input.value = ""
          input.focus()
          if(intento == 3){
               alert("Perdiste, hiciste 3 intentos, el numero era " + numeroIncognito)
               boton.disabled = true
               titulo.innerText = "Refresque la página para volver a jugar (F5)"
          }
     }
     intento++
}

boton.onclick = imprimir