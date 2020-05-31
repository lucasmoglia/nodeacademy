const Jugador = require('./jugador');

class Guardian extends Jugador {
    constructor(_nombre, _equipo, _energia) {
        super(_nombre, _equipo, 'verde', _energia);
    }

    atajarLanzamiento() {
    };

    jugar() {
        if (this.energia != 0) {
            this.atajarLanzamiento()
            this.energia = (this.energia - 2)
            console.log('Soy' + this.nombre + 'y me queda ' + this.energia + 'de energia')
        } else return false;
    };

};
// // Pruebas de funcionamiento de codigo
// //GRIFFINDOR
// let guardian1 = new Guardian("Jesica", "Griffindor", "verde", [], 100);
// console.log(guardian1);
// //SLYTHERIN
// let guardian2 = new Guardian("Voldemort", "Slytherin", "verde", [], 100);
// console.log(guardian2);
module.exports = Guardian;