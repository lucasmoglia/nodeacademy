// CORREGIDO
class Pelotas {
    constructor(_nombre, _puntos) {
        this.nombre = _nombre;
        this.puntos = _puntos;
    };
    cuantoVales() {
        //console.log(this.puntos)
        return this.puntos;
    }
};

module.exports = Pelotas;