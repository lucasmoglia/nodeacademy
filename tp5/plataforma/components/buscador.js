const Jugador = require('./jugador');
const posicionSnitch = require('../core/parametros').snitch;
console.log(posicionSnitch);

class Buscador extends Jugador {
    constructor(_nombre, _equipo, _energia) {
        super(_nombre, _equipo, 'amarilla', _energia);
    }

    perseguirSnitch(number1, number2) {
        if ((number1 == posicionSnitch[0]) && (number2 == posicionSnitch[1])) {
            return true
        } else return false;
    };

    jugar() {
        if (this.energia != 0) {
            this.perseguirSnitch()
            this.energia = (this.energia - 20)
            console.log('Soy' + this.nombre + 'y me queda ' + this.energia + 'de energia')
        } else return false;
    };
};
// Pruebas de funcionamiento de codigo
//GRIFFINDOR
// let buscador1 = new Buscador("Nicolas", "Griffindor", "amarillo", [], 100);
// console.log(buscador1);
// //SLYTHERIN
// let buscador2 = new Buscador("Hermione", "Slytherin", "amarillo", [], 100);
// console.log(buscador2);
module.exports = Buscador;