const Jugador = require('./jugador');

class Cazador extends Jugador {
    constructor(_nombre, _equipo, _energia) {
        super(_nombre, _equipo, 'blanca', _energia);
    }

    lanzarAlAro() {
        this.pelotas.pop()
    };
    jugar() {
        if ((this.energia != 0) && (this.pelotas.length > 0)) {
            this.lanzarAlAro()
            this.energia = (this.energia - 10)
            console.log('Soy' + this.nombre + 'y me queda ' + this.energia + 'de energia')
        } else return false;
    };
};

// Pruebas de funcionamiento de codigo
//GRIFFINDOR
// let cazador1 = new Cazador("Florencia", "Griffindor", "blanco", [], 100);
// console.log(cazador1);
// let cazador2 = new Cazador("Magali", "Griffindor", "blanco", [], 100);
// console.log(cazador2);
// let cazador3 = new Cazador("Micaela", "Griffindor", "blanco", [], 100);
// console.log(cazador3);
// //SLYTHERIN
// let cazador4 = new Cazador("Malfoy", "Slytherin", "blanco", [], 100);
// console.log(cazador4);
// let cazador5 = new Cazador("Harry", "Slytherin", "blanco", [], 100);
// console.log(cazador5);
// let cazador6 = new Cazador("Snape", "Slytherin", "blanco", [], 100);
// console.log(cazador5);

module.exports = Cazador;