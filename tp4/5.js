/**
 * Crear una función, que reciba un semáforo, y una orden. Se deben cumplir estos casos.
        cambiarEstadoSemaforo(_semaforo, ‘alto’). Debe retornar el mismo semáforo que tenga en su estado el color ‘rojo’.
        cambiarEstadoSemaforo(_semaforo, ‘esperar’). Debe retornar el mismo semáforo que tenga en su estado el color ‘amarillo’.
        cambiarEstadoSemaforo(_semaforo, ‘avanzar’). Debe retornar el mismo 
 */


 /**
  * OPCION A
  * 
  * Evalúo la orden y cambio el estado
  */
 function cambiarEstadoSemaforo(_semaforo, _orden) {
    if(_orden == 'alto') {
        _semaforo.estado = 'rojo';
    } else if (_orden == 'esperar') {
        _semaforo.estado = 'amarillo';
    } else if (_orden == 'avanzar') {
        _semaforo.estado = 'verde';
    }
    return _semaforo; // <--- RETORNA EL MISMO SEMAFORO QUE RECIBE
 }


/**
 * OPCION B
 * 
 * Usamos un diccionario de órdenes y colores. Dada una orden, puedo obtener el color asociado (significado)
 */
const ORDENES = {
    'alto': 'rojo',
    'esperar': 'amarillo',
    'avanzar': 'verde'
}

function cambiarEstadoSemaforo_B(_semaforo, _orden) {
    _semaforo.estado = ORDENES[_orden];
    return _semaforo; // <--- RETORNA EL MISMO SEMAFORO QUE RECIBE
}


let semaforo = {
    estado: 'rojo',
}

console.log('-------------------- OPCION A --------------------');
semaforo = cambiarEstadoSemaforo(semaforo, 'avanzar')
console.log(semaforo);

console.log('-------------------- OPCION B --------------------');
semaforo = cambiarEstadoSemaforo_B(semaforo, 'avanzar')
console.log(semaforo);

module.exports = {
    cambiarEstadoSemaforo_B
};