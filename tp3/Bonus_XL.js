/**
 * Utilizando al menos un bucle, desarrollar una función que reciba un array y me devuelva el número más pequeño.
 */

 function dameElMinimo(_array) {
     let min = _array[0]; // <-- Lo inicializamos con algún elemento del array!
     for(var i=0; i < _array.length; i++) {
        if(_array[i] < min) { // <-- comparando cada uno buscando si hay alguno menor al que tenemos
            min = _array[i];// <--- Siempre nos quedamos con el más chico que aparece
        }
     }
     return min;
 }

 console.log(' --------------- Opción A (Ordenado) -> [1,2,3,4,5] ---------------');
 console.log(dameElMinimo([45,23,2,351,1]))
 console.log(' --------------- Opción B (Desordenado) -> [45,23,351,40] ---------------');
 console.log(dameElMinimo([45,23,351,40]))