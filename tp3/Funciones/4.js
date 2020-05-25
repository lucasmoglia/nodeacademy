// Ponemos en constantes valores que vamos a comparar o utilizar más de una vez
const VISA = 'VISA';
const MASTERCARD = 'MASTERCARD';
const CABAL = 'CABAL';

/**
 * Desarrollar una función que reciba tres parámetros:
        tipoTarjeta (VISA / MASTERCARD)
        importe
        codSeguridad (Códido de seguridad)

    La función deberá evaluar:
        i. Que el importe sea mayor a cero, caso contrario retornar el mensaje “El importe debe ser mayor a cero!”
        ii. Que el tipo de tarjeta sea VISA o MASTERCARD, caso contrario retornar el mensaje “La tarjeta no sirve para esta compra :(“
        iii. Que el código de seguridad sea distinto de undefined o vacío, caso contrario retornar el mensaje “El código de seguridad no es válido!”
        iv. Si todas las condiciones se cumplen, retornar “La compra fue procesada con éxito :)”
 */

 function decimeSiEstamosBien(_tipoTarjeta, _importe, _codSeguridad){
     //Que el importe sea mayor a cero, caso contrario retornar el mensaje “El importe debe ser mayor a cero!”
     if(!_importe > 0){
         return 'El importe debe ser mayor a cero!';
     }
     // Que el tipo de tarjeta sea VISA o MASTERCARD, caso contrario retornar el mensaje “La tarjeta no sirve para esta compra :(“
     if(!(_tipoTarjeta == VISA || _tipoTarjeta == MASTERCARD)){
        return 'La tarjeta no sirve para esta compra :(';
     }
     // Que el código de seguridad sea distinto de undefined o vacío, caso contrario retornar el mensaje “El código de seguridad no es válido!”
     if(!(_codSeguridad != undefined && _codSeguridad != '')){
        return 'El código de seguridad no es válido!';
     }

     return 'La compra fue procesada con éxito :)'
 }

 let respuesta = decimeSiEstamosBien(VISA, 1000, 123); // Estamos bien!
 let respuesta2 = decimeSiEstamosBien(CABAL, 0, ''); // Estamos tristes!

 console.log('Debería salir bien! -> ' + respuesta);
 console.log('Algo debería salir mal! -> ' + respuesta2);