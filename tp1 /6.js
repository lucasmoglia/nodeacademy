/**
 * Estamos desarrollando un programa que se encarga de imprimir en pantalla la información del cierre de caja de una tienda. 
 * Los datos que tenemos que ver, son:
 * Nombre de la tienda (puede ser nombre de la empresa o marca)
 * Tres facturas, que contienen cada una:
 * Tipo  y Número de factura (ej: A 0001-00000001)
 * Importe total (ej: $ 2000)
 * El valor total de la venta (ej: $ 2000.75)
 * 	Resultado esperado (ejemplo):
 * 	Tienda: Nike
 * 	A 0001-00000001
 * 	$ 1000
 * 	A 0001-00000002
 * 	$ 1000.50
 * 	A 0001-00000003
 * 	$ 1000
 * 	Total: $ 3000.50
 */

let nombreTienda = 'Blockbuster';
let factura1Nombre = 'A 0001-00000001';
let factura1Importe = '$ 1000';
let factura2Nombre = 'A 0001-00000002';
let factura2Importe = '$ 1000.50';
let factura3Nombre = 'A 0001-00000003';
let factura3Importe = '$ 1000';

let total = factura1Importe + factura2Importe + factura3Importe;

console.log('------------- Cierre de Caja -------------');
console.log(factura1Nombre);
console.log(factura1Importe);
console.log(factura2Nombre);
console.log(factura2Importe);
console.log(factura3Nombre);
console.log(factura3Importe);
console.log('Total de la venta: ' + total);