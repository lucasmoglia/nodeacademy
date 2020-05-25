const administradorDeVehiculos = require('../tp4/6');
console.log('Ejercicio 10 - Usando administrador de vehículos con funciones del punto 6');

const unaPersona = {
    nombre: 'Pepe',
    edad: 25,
    profesion: 'Programador',
    salario: 10000,
    tieneHijos: false,
    tieneVehiculo: true,
    vehiculo: {
        nafta: 10,
        lucesPrendidas: false,
        velocidad: 10,
    }
}

console.log('[ANTES] Están prendidas las luces? -> ', unaPersona.vehiculo.lucesPrendidas)
administradorDeVehiculos.prendeLasLuces(unaPersona.vehiculo);
console.log('[DESPUES] Están prendidas las luces? -> ', unaPersona.vehiculo.lucesPrendidas)