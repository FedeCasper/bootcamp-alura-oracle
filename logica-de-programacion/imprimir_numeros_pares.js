function imprimir(frase){
     document.write(frase)
     salto()
}

function salto(){
     document.write("<br>")
}

var contador = 1;

while(contador <= 100){
     
     if(contador%2 == 0){
          imprimir(contador + " Es par")
     }
     contador++;
}