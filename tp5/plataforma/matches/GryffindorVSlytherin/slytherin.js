const Team = require('../../core/team');
const {Buscador, Cazador, Golpeador, Guardian} = require('../../core/players');

class Slytherin extends Team {
    constructor(){
        super('Slytherin');
        this.golpeadores = [
            new Golpeador('Peregrine Derrick', this.name, 100),
            new Golpeador('Lucian Bole', this.name, 100),
            new Golpeador('Vincent Crabbe', this.name, 100),
            new Golpeador('Gregory Goyle', this.name, 100),
        ];
        this.buscadores = [
            new Buscador('Marcus Flint', this.name, 100),
            new Buscador('Graham Montague', this.name, 100),
            new Buscador('Adrian Pucey', this.name, 100),
            new Buscador('Cassius Warrington', this.name, 100),
            new Buscador('Urquhart', this.name, 100),
            new Buscador('Vaisey', this.name, 100),
        ];
        this.guardianes = [
            new Guardian('Miles Bletchley', this.name, 100),
        ];
        this.cazadores = [
            new Cazador('Regulus Black', this.name, 100),
            new Cazador('Terence Higgs', this.name, 100),
            new Cazador('Draco Malfoy', this.name, 100),
            new Cazador('Harper', this.name, 100),
        ];

        // TODO: Randomize this part would be great!
        // Beaters
        this.addPlayer(this.golpeadores[0]);
        this.addPlayer(this.golpeadores[1]);
        // Seekers
        this.addPlayer(this.buscadores[1]);
        // Keepers
        this.addPlayer(this.guardianes[0]);
        // Chasers
        this.addPlayer(this.cazadores[1]);
        this.addPlayer(this.cazadores[2]);
        this.addPlayer(this.cazadores[3]);
    }
}

module.exports = Slytherin;