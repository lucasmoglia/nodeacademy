/**
 * Desarrollar una función que reciba un array de números, y retorne el mismo array con los números multiplicados por dos.
    Ej. multiplicalosPorDos([1,2,3,4]) -> [2,4,6,8]
 */

 function multiplicalosPorDos(_array){
     for(let i=0; i < _array.length; i++){ // <---- usando let
         _array[i] = _array[i] * 2;
     }
     return _array;
 }

 function multiplicalosPorDos_B(_array){
    for(var i=0; i < _array.length; i++){ // <---- usando var
        _array[i] = _array[i] * 2;
    }
    return _array;
}

/**
 * Usamos el WHILE con la condición de que el elemento que estamos viendo sea distinto de undefined
 * ('mientras sea distinto de undefined', es como decir, 'mientras haya elementos')
 * @param {Array} _array 
 */
function multiplicalosPorDos_C(_array){
    let i = 0;
    while (_array[i] != undefined) { // <---- usando while hasta que no haya más elementos para ver
        _array[i] = _array[i] * 2;
        i++; // <---- Esto en el for aparece como i++ dentro de la 'fórmula', sirve para que avance de indice en el array
    }
    return _array;
}

let result;
console.log(' --------------- Opción A (Clásico) ---------------');
result = multiplicalosPorDos([1,2,3,4]) 
console.log(result);
console.log(' --------------- Opción B (Mínimo retoque) ---------------');
result = multiplicalosPorDos_B([1,2,3,4]) 
console.log(result);
console.log(' --------------- Opción C (Yeiii) ---------------');
result = multiplicalosPorDos_C([1,2,3,4]) 
console.log(result);
