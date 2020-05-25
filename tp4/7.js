/**
 * Crear una función que reciba un vehículo y retorne el mismo vehículo con las luces apagadas. 
 * Si sobre la respuesta, le pregunto vehiculo.lucesPrendidas me tiene que decir false
    apagaLasLuces(_vehículo) 
 */

function apagaLasLuces(_vehiculo) {
    _vehiculo.lucesPrendidas = false;
    return _vehiculo;
}

let vehiculo = {
   nafta: 10,
   lucesPrendidas: true,
   velocidad: 10,
}

console.log('[ANTES] Tiene las luces prendidas? -> ', vehiculo.lucesPrendidas)
const vehiculoEditado = apagaLasLuces(vehiculo);
console.log('[DESPUES] Tiene las luces prendidas? -> ', vehiculoEditado.lucesPrendidas)
