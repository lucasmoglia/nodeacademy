const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const Jugador = require('../components/jugador');
const Buscador = require('../components/buscador');
const Cazador = require('../components/cazador');
const Golpeador = require('../components/golpeador');
const Guardian = require('../components/guardian');
const Pelota = require('../components/pelotas');

let player = {};
const name = 'Name';
const team = 'Team';
const vincha = 'violeta';
const energy = 100;
const vinchaColors = {
    'buscador': 'amarilla',
    'cazador': 'blanca',
    'golpeador': 'negra',
    'guardian': 'verde',
}
describe('Jugador', () => {
    beforeEach(() => {
        player = new Jugador(name, team, vincha, energy);
    })
    it('A new instance has player & team name', () => {
        assert(player.nombre == name);
        assert(player.equipo == team);
        assert(player.vincha == vincha);
        assert(player.energia == energy);
    });
    it('A new instance has right attributes data type (aligned to TP specs)', () => {
        assert(typeof(player.nombre) == 'string');
        assert(typeof(player.equipo) == 'string');
        assert(typeof(player.vincha) == 'string');
        assert(typeof(player.energia) == 'number');
    });
    it('A player can play', () => {
        expect(new Jugador()).to.respondTo('jugar');
    });
    it('Players can catch a ball', () => {
        expect(new Jugador()).to.respondTo('agarrarPelota');
    });
});
describe('Buscador', () => {
    it('Extends from Jugador', () => {
        const buscador = new Buscador(name, team, energy);
        assert(Object.getPrototypeOf(buscador.constructor).name == 'Jugador');
    });
    it('A new instance has player & team name', () => {
        const buscador = new Buscador(name, team, energy);
        assert(buscador.nombre == name);
        assert(buscador.equipo == team);
        assert(buscador.energia == energy);
    });
    it('A new instance has right attributes data type (aligned to TP specs)', () => {
        const buscador = new Buscador(name, team, energy);
        assert(typeof(buscador.nombre) == 'string');
        assert(typeof(buscador.equipo) == 'string');
        assert(typeof(buscador.vincha) == 'string');
        assert(typeof(buscador.energia) == 'number');
    });
    it('A new instance wears the right `vincha` color', () => {
        const buscador = new Buscador(name, team, energy);
        assert(buscador.vincha == vinchaColors.buscador)
    });
    it('A Searcher can persuit the snitch', () => {
        expect(new Buscador()).to.respondTo('perseguirSnitch');
    });
    it('Has lost energy after playing', () => {
        const buscador = new Buscador(name, team, energy);
        buscador.jugar();
        expect(buscador.energia < energy);
        expect(energy - buscador.energia == 20);
    });
    it('Can catch a ball', () => {
        const buscador = new Buscador(name, team, energy);
        expect(buscador).to.respondTo('agarrarPelota');
    })
    it('Can catch a ball and keeping it', () => {
        const buscador = new Buscador(name, team, energy);
        buscador.agarrarPelota(new Pelota());
        expect(buscador).to.haveOwnProperty('pelotas');
        expect(buscador.pelotas.length == 1);
    });
});
describe('Cazador', () => {
    it('Extends from Jugador', () => {
        const cazador = new Cazador(name, team, energy);
        assert(Object.getPrototypeOf(cazador.constructor).name == 'Jugador');
    });
    it('A new instance has player & team name', () => {
        const cazador = new Cazador(name, team, energy);
        assert(cazador.nombre == name);
        assert(cazador.equipo == team);
        assert(cazador.energia == energy);
    });
    it('A new instance has right attributes data type (aligned to TP specs)', () => {
        const cazador = new Cazador(name, team, energy);
        assert(typeof(cazador.nombre) == 'string');
        assert(typeof(cazador.equipo) == 'string');
        assert(typeof(cazador.vincha) == 'string');
        assert(typeof(cazador.energia) == 'number');
    });
    it('A new instance wears the right `vincha` color', () => {
        const cazador = new Cazador(name, team, energy);
        assert(cazador.vincha == vinchaColors.cazador)
    });
    it('Can catch a ball', () => {
        const cazador = new Cazador(name, team, energy);
        expect(cazador).to.respondTo('agarrarPelota');
    });
    it('A Hunter know how to make a goal', () => {
        expect(new Cazador()).to.respondTo('lanzarAlAro');
    });
    it('Release the ball after throwing', () => {
        let cazador = new Cazador('Cazador', 'Gryffindor', 100);
        expect(cazador.pelotas.length == 0); // No balls at beginning
        cazador.agarrarPelota({});
        expect(cazador.pelotas.length == 1); // Now he has a ball
        cazador.lanzarAlAro();
        expect(cazador.pelotas.length == 0); // The array is empty after throwing
    });
    it('Has lost energy after playing', () => {
        const cazador = new Cazador(name, team, energy);
        cazador.jugar();
        expect(cazador.energia < energy);
        expect(energy - cazador.energia == 10);
    });
    it('Can catch a ball and keeping it', () => {
        const cazador = new Cazador(name, team, energy);
        cazador.agarrarPelota(new Pelota());
        expect(cazador).to.haveOwnProperty('pelotas');
        expect(cazador.pelotas.length == 1);
    });
});
describe('Golpeador', () => {
    it('Extends from Jugador', () => {
        const golpeador = new Golpeador(name, team, energy);
        assert(Object.getPrototypeOf(golpeador.constructor).name == 'Jugador');
    });
    it('A new instance has player & team name', () => {
        const golpeador = new Golpeador(name, team, energy);
        assert(golpeador.nombre == name);
        assert(golpeador.equipo == team);
        assert(golpeador.energia == energy);
    });
    it('A new instance has right attributes data type (aligned to TP specs)', () => {
        const golpeador = new Golpeador(name, team, energy);
        assert(typeof(golpeador.nombre) == 'string');
        assert(typeof(golpeador.equipo) == 'string');
        assert(typeof(golpeador.vincha) == 'string');
        assert(typeof(golpeador.energia) == 'number');
    });
    it('A new instance wears the right `vincha` color', () => {
        const golpeador = new Golpeador(name, team, energy);
        assert(golpeador.vincha == vinchaColors.golpeador)
    });
    it('A Beater know how to hit an enemy', () => {
        expect(new Golpeador()).to.respondTo('quemarJugador');
    });
    it('Has lost energy after playing (5 units)', () => {
        const golpeador = new Golpeador(name, team, energy);
        golpeador.jugar();
        expect(golpeador.energia < energy);
        expect(energy - golpeador.energia == 5);
    });
    it('Can catch a ball', () => {
        const golpeador = new Golpeador(name, team, energy);
        expect(golpeador).to.respondTo('agarrarPelota');
    });
    it('Can catch a ball and keeping it', () => {
        const golpeador = new Golpeador(name, team, energy);
        golpeador.agarrarPelota(new Pelota());
        expect(golpeador).to.haveOwnProperty('pelotas');
        expect(golpeador.pelotas.length == 1);
    });
});
describe('Guardian', () => {
    it('Extends from Jugador', () => {
        const guardian = new Guardian(name, team, energy);
        assert(Object.getPrototypeOf(guardian.constructor).name == 'Jugador');
    });
    it('A new instance has player & team name', () => {
        const guardian = new Guardian(name, team, energy);
        assert(guardian.nombre == name);
        assert(guardian.equipo == team);
        assert(guardian.energia == energy);
    });
    it('A new instance has right attributes data type (aligned to TP specs)', () => {
        const guardian = new Guardian(name, team, energy);
        assert(typeof(guardian.nombre) == 'string');
        assert(typeof(guardian.equipo) == 'string');
        assert(typeof(guardian.vincha) == 'string');
        assert(typeof(guardian.energia) == 'number');
    });
    it('A new instance wears the right `vincha` color', () => {
        const guardian = new Guardian(name, team, energy);
        assert(guardian.vincha == vinchaColors.guardian)
    });
    it('A Guardian know how to catch a ball', () => {
        expect(new Guardian()).to.respondTo('atajarLanzamiento');
    });
    it('Has lost energy after playing (2 units)', () => {
        const guardian = new Guardian(name, team, energy);
        guardian.jugar();
        expect(guardian.energia < energy);
        expect(energy - guardian.energia == 2);
    });
    it('Can catch a ball', () => {
        const guardian = new Guardian(name, team, energy);
        expect(guardian).to.respondTo('agarrarPelota');
    })
    it('Can catch a ball and keeping it', () => {
        const guardian = new Guardian(name, team, energy);
        guardian.agarrarPelota(new Pelota());
        expect(guardian).to.haveOwnProperty('pelotas');
        expect(guardian.pelotas.length == 1);
    });
});


