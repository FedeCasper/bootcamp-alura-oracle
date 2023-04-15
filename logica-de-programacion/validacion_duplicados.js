function llenarArray (cantidad){
     let arrayNumeros = [];
     let contador = 1;

     while(contador <= cantidad){
          let encontrado = false
          let numeroSecreto = Math.ceil(Math.random()*10)
          for(let i = 0 ; i < arrayNumeros.length ; i++){
               if(numeroSecreto == arrayNumeros[i]){
                    encontrado = true
                    break;
               }
          }
          if(encontrado == false){
               arrayNumeros.push(numeroSecreto)
               contador++
          }
     }
     console.log(arrayNumeros);
     return arrayNumeros
}