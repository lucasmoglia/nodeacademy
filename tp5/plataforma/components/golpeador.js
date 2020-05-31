const Jugador = require('./jugador');
class Golpeador extends Jugador {
    constructor(_nombre, _equipo, _energia) {
        super(_nombre, _equipo, 'negra', _energia);
    }

    quemarJugador(_jugador) {
        this.pelotas.pop()
    };
    jugar() {
        if ((this.energia != 0) && (this.pelotas.length > 0)) {
            this.quemarJugador()
            this.energia = (this.energia - 5)
            console.log('Soy' + this.nombre + 'y me queda ' + this.energia + 'de energia')
        } else {return false};
    };
};

// Pruebas de funcionamiento de codigo
//GRIFFINDOR
// let golpeador1 = new Golpeador("Lucas", "Griffindor", "negro", [], 100);
// console.log(golpeador1);
// let golpeador2 = new Golpeador("Nancy", "Griffindor", "negro", [], 100);
// console.log(golpeador2);
// //SLYTHERIN
// let golpeador3 = new Golpeador("Hagrid", "Slytherin", "negro", [], 100);
// console.log(golpeador3);
// let golpeador4 = new Golpeador("Minerva", "Slytherin", "negro", [], 100);
// console.log(golpeador4);

module.exports = Golpeador;