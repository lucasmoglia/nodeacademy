/**
 * Desarrollar una función que reciba un array de números y retorne la suma total.
    Ej. sumalosTodos([1,2,3,4]) -> 10

    Similar al anterior, solo que en lugar de reemplazar... acumulamos una suma!
 */


// OPCION A (Classic)
function sumalosTodos(_array) {
    let acumulador = 0;
    for(var i=0; i < _array.length; i++){
        acumulador = acumulador + _array[i];
    }
    return acumulador;
}

// OPCION B (A little better)
function sumalosTodos_B(_array) {
    let acumulador = 0;
    for(var i=0; i < _array.length; i++){
        acumulador += _array[i]; // <--- Acá! Usamos el operador binario (+=)
        // Es lo mismo que hacer
        // acumulador = acumulador + _array[i];
    }
    return acumulador;
}

let result;
console.log(' --------------- Opción A (Classic) ---------------');
result = sumalosTodos([1,2,3,4]); 
console.log('Debería dar 10 -> ', result);
console.log(' --------------- Opción B (A little better) ---------------');
result = sumalosTodos_B([1,2,3,4]); 
console.log('Debería dar 10 -> ', result);