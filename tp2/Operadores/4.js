/**
 * Realizando el cobro en una tienda, solo se realizará la operación si la tarjeta es VISA y el código de seguridad es mayor a cero. 
 */

 let tarjeta = 'VISA';
 let codSeg = 123;

 let operacion = tarjeta == 'VISA' && codSeg > 0;