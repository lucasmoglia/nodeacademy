const logger = require('./logger');

class Team {
    /**
     * Construye un objeto de tipo Equipo
     * @param {string} _name Nombre del equipo
     */
    constructor(_name){
        this.players = [];
        this.name = _name;
    }

    addPlayer(_player) {
        logger.info(`[${this.constructor.name}] Adding player ${_player.nombre} to ${this.name}`);
        this.players.push(_player);
    }
}

module.exports = Team;