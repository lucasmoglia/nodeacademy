/**
 * Crear una función que reciba un vehículo y retorne el mismo vehículo con las luces prendidas. 
 * Si sobre la respuesta, le pregunto vehiculo.lucesPrendidas me tiene que decir true
    prendeLasLuces(_vehículo) 
 */

 function prendeLasLuces(_vehiculo) {
     _vehiculo.lucesPrendidas = true;
     return _vehiculo;
 }

let vehiculo = {
    nafta: 10,
    lucesPrendidas: false,
    velocidad: 10,
}

console.log('[ANTES] Tiene las luces prendidas? -> ', vehiculo.lucesPrendidas)
const vehiculoEditado = prendeLasLuces(vehiculo);
console.log('[DESPUES] Tiene las luces prendidas? -> ', vehiculoEditado.lucesPrendidas)

module.exports = {
    prendeLasLuces,
}
