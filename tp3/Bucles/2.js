/**
 * Desarrollar una función que reciba un número entero y retorne los siguientes diez números.
    Ej. dameLosDiezSiguientes(5)
 */

 function diezSiguientes(_numero){
     let result = []; // <--- Preparo el acumulador de resultados
     for(let i =0; i<10; i++){
         result.push(_numero + i); // <--- Inserta en el array 
     }
     return result; // <----Retorno la respuesta
 }