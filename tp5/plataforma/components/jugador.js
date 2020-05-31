// Clase JUGADOR -- CORREGIDA

class Jugador {
    constructor(_nombre, _equipo, _vincha, _energia) {
        // Atributos iguales a todos los jugadores
        this.nombre = _nombre;
        this.equipo = _equipo;
        this.vincha = _vincha;
        this.pelotas = [];
        this.energia = _energia;
    }
    // Metodos iguales a todos los jugadores
    colorVincha() {
        console.log(this.vincha)
    }
    agarrarPelota(_unaPelota) {
        this.pelotas.push(_unaPelota)
    }
    jugar() {
    }
};
module.exports = Jugador;

// Pruebas de funcionamiento de codigo
// let jugador1 = new Jugador("Luna", "Griffindor", "roja", [], 100);
// console.log(jugador1);