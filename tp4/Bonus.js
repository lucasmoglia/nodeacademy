/**
 * Mejorar el diseño del objeto carretera sabiendo que:
        - La carretera tiene 6 vehículos, que se encuentran en circulación.
        - Dos de esos seis vehículos, tienen las luces apagadas.
        - Uno de esos seis vehículos, no tiene más nafta, está detenido (La velocidad de este auto es cero, no?)
        - Crear una función que reciba esta nueva carretera con autos, y me retorne el auto que no tiene nafta!
 */

const unaCarretera = {
    pavimento: false,
    semaforos: true,
    vehiculos: [
        {
            nafta: 10,
            lucesPrendidas: false, // <--- primero con luz apagada
            velocidad: 10,
        },{
            nafta: 10,
            lucesPrendidas: false, // <--- segundo con luz apagada
            velocidad: 10,
        },{
            nafta: 0, // <-- Este se quedó sin nafta
            lucesPrendidas: true,
            velocidad: 10,
        },{
            nafta: 10,
            lucesPrendidas: true,
            velocidad: 10,
        },{
            nafta: 10,
            lucesPrendidas: true,
            velocidad: 10,
        },{
            nafta: 10,
            lucesPrendidas: true,
            velocidad: 10,
        }
    ]
}

function queVehiculosNoTienenNafta(_carretera){
    for(var i=0; i < _carretera.vehiculos.length; i++){ // <-- Iteramos sobre los vehiculos que están en la carretera
        if(_carretera.vehiculos[i].nafta == 0){
            return _carretera.vehiculos[i];
        }
    }
}

console.log('Qué vehículos no tienen nafta? -> ', queVehiculosNoTienenNafta(unaCarretera));