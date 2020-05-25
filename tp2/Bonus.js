// Ponemos en constantes valores que vamos a comparar o utilizar más de una vez
const EFECTIVO = 'efectivo';
const TARJETA = 'tarjeta';
const CHEQUE = 'cheque';

/**
 * Nos encargaron desarrollar una aplicación para venta de muebles, con envío a domicilio. Tenemos que construir un algoritmo que, sólo en caso de poder realizarse la venta, nos permita detectar si se puede realizar el envío.
 *   Se puede hacer una venta, si se cumple que:
 *    - El usuario tiene más de 18 años.
 *    - Realiza el pago en efectivo o en tarjeta
 *      Si se cumplen las condiciones para realizar la venta, entonces podrá realizarse el envío, 
 *      si además se cumple que:
 *      - La distancia de la casa del cliente a la tienda es menor a 15 km
 *      - Compra menos de 5 productos.
 *   
 *   Si se puede hacer la venta, 
 *      imprimir “La venta fue procesada con éxito”, 
 *   de lo contrario imprimir “La venta no puede realizarse”.
 *   Si se puede realizar el envío, 
 *      imprimir “El envío fue procesado con éxito”, 
 *   de lo contrario, imprimir “No cumple requisitos para realizar el envío”.
 */

// Valores de mi escenario (Esto se puede cambiar)
let edad = 20;
let metodoPago = EFECTIVO;
let distanciaCasaKm = [10, 200]; // <--- cambia este tipo de valor (antes era un entero)
let cantProductos = 2;

// Comparaciones y Operaciones
let sePuedeHacerLaVenta = edad > 18 && (metodoPago == EFECTIVO || metodoPago == TARJETA);
let distanciaCasaKmOk = distanciaCasaKm[0] < 100 && distanciaCasaKm[1] > 100; // <--- Agregamos la validación nueva
let sePuedeHacerEnvio = distanciaCasaKmOk && cantProductos < 5; // <-- Acá evaluamos la nueva condición

// Condicionales
console.log(' --------------- Opción A (Genial) ---------------');
if(sePuedeHacerLaVenta){
    console.log('La venta fue procesada con éxito');
    if(sePuedeHacerEnvio) {
        console.log('El envío fue procesado con éxito');
    } else {
        console.log('No cumple requisitos para realizar el envío');
    }
} else {
    console.log('La venta no puede realizarse');
}

console.log(' --------------- Opción B (Parecida) ---------------');
if(!sePuedeHacerLaVenta){
    console.log('La venta no puede realizarse');
} else {
    console.log('La venta fue procesada con éxito');
    if(sePuedeHacerEnvio) {
        console.log('El envío fue procesado con éxito');
    } else {
        console.log('No cumple requisitos para realizar el envío');
    }
}

console.log(' --------------- Opción C (Muy complicada :/) ---------------');
if(sePuedeHacerLaVenta && sePuedeHacerEnvio) {
    console.log('La venta fue procesada con éxito');
    console.log('El envío fue procesado con éxito');
} else if(!sePuedeHacerLaVenta) {
    console.log('La venta no puede realizarse');
} else if(!sePuedeHacerEnvio){
    console.log('La venta fue procesada con éxito');
    console.log('No cumple requisitos para realizar el envío');
}
