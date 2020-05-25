// Comprobar que la facturación del enunciado 3 es menor que la recaudación del enunciado 5.

/** Del ejercicio 3
 * @see tp2/Comparadores/3.js
 */ 
let venta1 = 1500;
let venta2 = 1500;
let venta3 = 1500;
let comparacion3 = (venta1 + venta2 + venta3) == 4500;

/** 
 * Del enunciado 5
 * @see tp2/Comparadores/5.js
 */
let valorTicket = 1200;
let recaudacionTotal = 35 * valorTicket;
let comparacion5 = recaudacionTotal > 1000000;

let comparacion6 = (comparacion3 < comparacion5);
console.log('la facturación del enunciado 3 es menor que la recaudación del enunciado 5? -> ' + comparacion6);