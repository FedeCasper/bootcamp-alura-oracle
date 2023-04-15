
let numeroIncognito = []

let div1 = document.getElementById('1')

function generarNumeroAleatorio() {
     div1.innerHTML = ""
     numeroIncognito = []
     while (numeroIncognito.length < 4) {
          let aux = Math.ceil(Math.random() * 10)
          if (!numeroIncognito.includes(aux)) {
               numeroIncognito.push(aux)
          }
     }
     console.log(numeroIncognito);

     for (let i = 0; i < 4; i++) {
          div1.innerHTML += `<p id="p${i}">?<p>`
     }
}

let contenedorNumeros = document.getElementById('contenedorNumeros')
let input = document.querySelector('input')
input.focus()
let botonVerificar = document.querySelector('#btnVerificar')
let botonGenerar = document.querySelector('#btnGenerar')
let titulo = document.querySelector('h1')
console.log(botonVerificar);
let intento = 0;
let intento2 = 0;

function primerIntento() {
     let p0 = document.getElementById('p0')
     if (numeroIncognito[0] === parseInt(input.value)) {
          alert("acertaste intento nro. " + intento);
          p0.innerText = numeroIncognito[0]
     } else {
          alert("qui pifiaste intento nro. " + intento);
          input.value = ""
          input.focus()
          if (intento == 10) {
               alert("Perdiste, hiciste 3 intentos, el numero era " + numeroIncognito)
               botonVerificar.disabled = true
               titulo.innerText = "Refresque la página para volver a jugar (F5)"
          }46
     }
     intento2 = 1
     console.log(intento);
}

console.log(intento);
function segundoIntento() {
     let p1 = document.getElementById('p1')
     if (numeroIncognito[1] === parseInt(input.value)) {
          alert("acertaste intento nro. " + intento);
          p1.innerText = numeroIncognito[1]
     } else {
          alert("cuack! pifiaste intento nro. " + intento);
          input.value = ""
          input.focus()
          if (intento == 10) {
               alert("Perdiste, hiciste 3 intentos, el numero era " + numeroIncognito)
               botonVerificar.disabled = true
               titulo.innerText = "Refresque la página para volver a jugar (F5)"
          }
     }
     intento++
     
}

function tercerIntento() {
     let p2 = document.getElementById('p2')
     if (numeroIncognito[2] === parseInt(input.value)) {
          alert("acertaste intento nro. " + intento);
          p2.innerText = numeroIncognito[2]
     } else {
          alert("pifiaste intento nro. " + intento);
          input.value = ""
          input.focus()
          if (intento == 10) {
               alert("Perdiste, hiciste 3 intentos, el numero era " + numeroIncognito)
               botonVerificar.disabled = true
               titulo.innerText = "Refresque la página para volver a jugar (F5)"
          }
     }
     intento++
}

function cuartoIntento() {
     let p3 = document.getElementById('p3')
     if (numeroIncognito[3] === parseInt(input.value)) {
          alert("acertaste intento nro. " + intento);
          p3.innerText = numeroIncognito[3]
     } else {
          alert("pifiaste intento nro. " + intento);
          input.value = ""
          input.focus()
          if (intento == 10) {
               alert("Perdiste, hiciste 3 intentos, el numero era " + numeroIncognito)
               botonVerificar.disabled = true
               titulo.innerText = "Refresque la página para volver a jugar (F5)"
          }
     }
     intento++
}

if (intento === 0) {
     botonVerificar.onclick = primerIntento
} else if (intento2 === 1) {
     botonVerificar.onclick = segundoIntento
} else if (intento === 2) {
     botonVerificar.onclick = tercerIntento
} else if (intento === 3) {
     botonVerificar.onclick = cuartoIntento
}

botonGenerar.onclick = generarNumeroAleatorio