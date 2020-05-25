// La suma entre dos números mayores a 10 es mayor a 5 y la división entre 10 y 2, es distinto a 2
let unNumero = 11;
let otroNumero = 14;
let suma = unNumero + otroNumero;

let comparacion1 = (suma > 5);
let comparacion2 = (10/2) != 2;

let operacion = comparacion1 && comparacion2;
console.log('Resultado -> ' + operacion);