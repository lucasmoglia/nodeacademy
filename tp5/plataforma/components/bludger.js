const Pelotas = require('./pelotas');

class Bludger extends Pelotas {
    constructor() {
        super('Bludger', 0)
    };
};

// let bludger1 = new Bludger("bludger", "");
// let bludger2 = new Bludger("bludger", "");
// let bludger3 = new Bludger("bludger", "");
// console.log(bludger1.cuantoVales(bludger1));
module.exports = Bludger;