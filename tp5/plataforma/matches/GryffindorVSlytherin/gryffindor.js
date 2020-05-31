const Team = require('../../core/team');
const {Buscador, Cazador, Golpeador, Guardian} = require('../../core/players');

class Gryffindor extends Team {
    constructor(){
        super('Gryffindor');
        this.golpeadores = [
            new Golpeador('Fred Weasley', this.name, 100),
            new Golpeador('George Weasley', this.name, 100),
            new Golpeador('Andrew Kirke', this.name, 100),
            new Golpeador('Jack Sloper', this.name, 100),
            new Golpeador('Ritchie Coote', this.name, 100),
            new Golpeador('Jimmy Peakes', this.name, 100),
        ]
        this.cazadores = [
            new Cazador('James Potter', this.name, 100),
            new Cazador('Angelina Johnson', this.name, 100),
            new Cazador('Alicia Spinnet', this.name, 100),
            new Cazador('Katie Bell', this.name, 100),
            new Cazador('Ginny Weasley', this.name, 100),
            new Cazador('Demelza Robins', this.name, 100),
            new Cazador('Dean Thomas', this.name, 100),
            new Cazador('Rose Granger', this.name, 100),
        ]
        this.guardianes = [
            new Guardian('Oliver Wood', this.name, 100),
            new Guardian('Ron Weasley', this.name, 100),
            new Guardian('Cormac McLaggen', this.name, 100),
        ]
        this.buscadores = [
            new Buscador('Charlie Weasley', this.name, 100),
            new Buscador('Harry Potter', this.name, 100),
            new Buscador('Ginny Weasley', this.name, 100),
            new Buscador('M. G. McGonagall', this.name, 100),
            new Buscador('R. King', this.name, 100),
        ]

        // TODO: Randomize this part would be great!
        // Beaters
        this.addPlayer(this.golpeadores[0]);
        this.addPlayer(this.golpeadores[1]);
        // Seekers
        this.addPlayer(this.buscadores[1]);
        // Keepers
        this.addPlayer(this.guardianes[1]);
        // Chasers
        this.addPlayer(this.cazadores[1]);
        this.addPlayer(this.cazadores[2]);
        this.addPlayer(this.cazadores[3]);
    }
}

module.exports = Gryffindor;