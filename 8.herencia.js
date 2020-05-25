const posicionSnitch = require('./parametros').snitch;
console.log(posicionSnitch)

/**
 * Objetos
 * 
 * ** Atributos / Propiedades => características del objeto
 * ** Métodos / Funciones => comportamiento del objeto
 */
class Animal {
    constructor(_nombre){
        // Atributos
        this.nombre = _nombre;
    }

    // Métodos = Comportamiento
    comer(_comida) {
        console.log('Comí ' + _comida);
    }

    hazLoTuyo(){
        console.log('bailo en una pata!')
    }
}


class Gato extends Animal {
    constructor(_nombre){
        super(_nombre); // Llama al constructor de la clase Animal
    }
    ronronear(){
        console.log('rrrrrrrrr');
    }
    hazLoTuyo(){
        console.log('miau' + this.nombre);
        this.ronronear();
    }
}

class Perro extends Animal {
    constructor(_nombre){
        super(); // Llama al constructor de la clase Animal
    }
    hazLoTuyo(){
        console.log('guau')
    }
}

class Tigre extends Animal {
    constructor(_nombre){
        super(); // Llama al constructor de la clase Animal
    }
    hazLoTuyo(){
        console.log('graaaaww')
    }
}

let gato = new Gato('Felix');
let perro = new Perro('Ayudante de Santa');
let tigre = new Tigre('Ayudante de Santa');
gato.hazLoTuyo();

class Jugador{
    constructor(_nombre, _equipo){
        this.nombre = _nombre;
        this.equipo = _equipo;
    }
}

class Buscador extends Jugador {
    constructor(_nombre, _equipo){
        super(_nombre, _equipo);
    }
}
let buscador = new Buscador('Harry Potter', 'Gryffindor');
console.log(buscador.equipo);
