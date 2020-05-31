const Gryffindor = require('./gryffindor');
const Slytherin = require('./slytherin');
const Match = require('../../core/match');

const match = new Match(new Gryffindor(), new Slytherin(), 2);
match.kickOff();