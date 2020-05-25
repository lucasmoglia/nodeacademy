const administradorDeSemaforos = require('../tp4/5');
console.log('Ejercicio 9 - Utilizando funciones del ejercicio 5');

/**
 * Embeber el objeto semáforo, dentro de un objeto carretera.
    Imprimir el estado del semáforo de esa carretera
    Cambiar el estado del semáforo de esa carretera para que los autos no avancen
    Imprimir el estado del semáforo de esa carretera
    Cambiar el estado del semáforo de esa carretera para que los autos esperen
    Imprimir el estado del semáforo de esa carretera
    Cambiar el estado del semáforo de esa carretera para que los autos puedan avanzar
    Imprimir el estado del semáforo de esa carretera
 */

const carretera = {
    pavimento: false,
    semaforo: {
        estado: 'avanzar',
        colores: ['rojo', 'amarillo', 'verde'],
    },
}

console.log(carretera.semaforo.estado);
administradorDeSemaforos.cambiarEstadoSemaforo_B(carretera.semaforo, 'alto');
console.log(carretera.semaforo.estado);
administradorDeSemaforos.cambiarEstadoSemaforo_B(carretera.semaforo, 'esperar');
console.log(carretera.semaforo.estado);
administradorDeSemaforos.cambiarEstadoSemaforo_B(carretera.semaforo, 'avanzar');
console.log(carretera.semaforo.estado);



