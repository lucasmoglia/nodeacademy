/**
 * Del ejercicio “Operadores - punto 4”, 
 *  - si se cumplen las condiciones, imprimir “Operación realizada con éxito”, 
 *  - de lo contrario “Ha ocurrido un error!”.
 */

let tarjeta = 'VISA';
let codSeg = 123;

let operacion = tarjeta == 'VISA' && codSeg > 0;

if(operacion){
    console.log('Operación realizada con éxito');
} else {
    console.log('Ha ocurrido un error!');
}