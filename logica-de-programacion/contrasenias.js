var inicioDeSesionRegistrado = "alura";
var contrasenhaRegistrada = "alura321";

for (var intento = 1; intento <= 3; intento++) {
     var inicioDeSesionIngresado = prompt("Ingrese su usuario");
     var contrasenhaIngresada = prompt("Ingrese su contraseña");

     if (inicioDeSesionRegistrado == inicioDeSesionIngresado && contrasenhaRegistrada == contrasenhaIngresada) {
          alert("Bienvenido al sistema " + inicioDeSesionIngresado);
          break;
     } else {
          if(intento == 3){
               alert("Ud hizo 3 intento, espere 1 hr para volver a intentar")
          }else{
               alert("Inicio de sesión inválido. Favor intente de nuevo, le quedan " + (3 - intento) + " intento/s");
          }
          
     }

}