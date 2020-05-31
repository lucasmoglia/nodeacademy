const Pelotas = require('./pelotas');

class Snitch extends Pelotas {
    constructor() {
        super('Snitch', 30)
    }
};

// let snitch = new Snitch("snitch", 30);
// console.log(snitch.cuantoVales(snitch));
module.exports = Snitch;