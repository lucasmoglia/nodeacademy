const Pelotas = require('./pelotas');

class Quaffle extends Pelotas {
    constructor() {
        super('Quaffle', 10)
    }
};

// let quaffle = new Quaffle("quaffle", 10);
// console.log(quaffle.cuantoVales(quaffle));
module.exports = Quaffle;