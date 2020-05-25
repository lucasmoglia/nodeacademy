/**
 * Crear una función que permita pavimentar una carretera. 
 * 
 * Recibe una carretera, y retorna la misma con su respectivo estado de pavimento.
    let carretera = pavimenta(_carretera)
    carretera.pavimento // Me tiene que decir true
 */

function pavimenta(_carretera){
    _carretera.pavimento = true;
    return _carretera;
}

// TEST
const carretera = {
    pavimento: false,
    semaforos: true,
}

console.log('[ANTES] Pavimentada? -> ', carretera.pavimento) // Me tiene que decir false
let carreteraEditada = pavimenta(carretera)
console.log('[DESPUES] Pavimentada? -> ', carreteraEditada.pavimento) // Me tiene que decir false