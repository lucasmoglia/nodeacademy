/**
 * Construir una función que reciba nuestro objeto carretera desarrollado en el punto 11 y 
 * nos pueda retornar un array de autos en circulación que tengan la luz apagada.
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
    let result = [];
    for(var i=0; i < _carretera.vehiculos.length; i++){ // <-- Iteramos sobre los vehiculos que están en la carretera
        if(!_carretera.vehiculos[i].lucesPrendidas){ // <-- Ojo acá! Operador de negación! (que NO tenga lucesPrendidas en true)
            result.push(_carretera.vehiculos[i]);
        }
    }
    return result; // <-- Retorna todos los que encontramos
}

console.log('Cuáles tienen las luces apagadas? -> ', queVehiculosNoTienenNafta(unaCarretera));

