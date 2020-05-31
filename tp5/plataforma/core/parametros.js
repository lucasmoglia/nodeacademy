/**
 * Handles platform resources
 */
class Parametros {
    constructor(){
        this.snitch = [2,3];
        /**
         * Sets hit percentage 
         * 0.1 => 90% chances to be true (more probable)
         * 0.9 => 10% chances to be true (less probable)
         */
        this.hitPercentage = 0.9;
    }
}

module.exports = new Parametros();