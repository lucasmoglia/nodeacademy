/**
 * Utilizando al menos un bucle, desarrollar una función que reciba un número y un array. Debe retornar un booleano:
        true: Si el número está en el array.
        false: Si el número no está en el array.
 */

 function estaEnElArray(_item, _array) {
     for(var i=0; i < _array.length; i++){
        if(_array[i] == _item){
            return true;
        }
     }
     return false;
 }
let result;
console.log('-------------------- TRUE -------------------- ');
console.log('estaEnElArray(1, [1,2,3,4,4])');
result = estaEnElArray(1, [1,2,3,4,4]);
console.log(result);

console.log('-------------------- FALSE -------------------- ');
console.log('estaEnElArray(10, [1,2,3,4,4])');
result = estaEnElArray(10, [1,2,3,4,4]);
console.log(result);

console.log('-------------------- ANOTHER TRUE -------------------- ');
console.log('estaEnElArray(42, [1,2,3,44,42])');
result = estaEnElArray(42, [1,2,3,44,42]);
console.log(result);

console.log('-------------------- WHERE ARE THE VALUES? -------------------- ');
console.log('estaEnElArray(100, [])');
result = estaEnElArray(100, []);
console.log(result);