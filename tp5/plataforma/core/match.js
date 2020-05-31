const Score = require('./score');
const logger = require('./logger');
const config = require('./parametros');
const {Snitch, Quaffle, Bludger} = require('./balls');
const Promise = require('bluebird');
/**
 * Quidditch match!
 */
class Match {
    /**
     * 
     * @param {Team} _teamA Local
     * @param {Team} _teamB Visitant
     * @param {int} _duration Match duration in minutes!
     */
    constructor(_teamA, _teamB, _duration=2, _halfTime = false){
        this.teams = [_teamA, _teamB];
        this.score = new Score(_teamA, _teamB);
        this.playersPerRole = [];
        this.playersPerTeam = 7;
        this.duration = _duration; // When to end the match!
        this.halfTime = _halfTime;
        this.snitchIsFree = true;

        this.balls = []
        this.balls.push(new Bludger());
        this.balls.push(new Bludger());
        this.balls.push(new Bludger());
        this.balls.push(new Quaffle());
        
        // Set teams goal positions
        // this.teams[0].goalPosition = [25, 0];
        // this.teams[1].goalPosition = [25, 50];
        this.hitPercentage = config.hitPercentage;
    }

    /**
     * Returns random boolean
     */
    hit(){
        return Math.random() >= this.hitPercentage;
    }

    /**
     * Assigns Quaffle to random _team's player
     * @param {Team} _team Team
     */
    assignQuaffle(_team) {
        const cazador = this.getRandomTeamCazador(_team);
        cazador.agarrarPelota(new Quaffle());
        logger.debug(`[${_team.name}] ${cazador.nombre} has recieved a Quaffle`);
    }

    assignBludger(_team) {
        const golpeador = this.getRandomTeamGolpeador(_team);
        golpeador.agarrarPelota(new Bludger());
        logger.debug(`[${_team.name}] ${golpeador.nombre} has recieved a Bludger`);
    }

    getTeamByPlayer(_player){
        return this.teams.filter(t => t.players.indexOf(_player) > -1)[0];
    }

    getOponentTeamByPlayer(_player){
        return this.teams.filter(t => t.players.indexOf(_player) == -1)[0];
    }
    /**
     * Try to catch the snitch
     * The team that caught the snitch is awarded 30 points
     * @param {*} _player 
     */
    catchSnitch(_player){
        if(!this.balls.filter(b => b.constructor.name == 'Snitch').length){
            _player.energia += 20;
            return;
        }
        const team = this.getTeamByPlayer(_player);
        logger.info(`[${team.name}] ${_player.nombre} intenta atrapar la snitch`)
        if(this.hit()){
            team.hasTheSnitch = true;
            this.score.addScoreForSnitch(team);
            this.snitchIsFree = false;
            logger.info(`[${team.name}] ${_player.nombre} atrapó la snitch!!!`)
            throw new Error('SNITCH');
        }
    }

    makesGoal(_player){
        const team = this.getTeamByPlayer(_player);
        const oponentTeam = this.getOponentTeamByPlayer(_player);
        logger.info(`[${team.name}] ${_player.nombre} lanza al aro...`)
        if(!this.savesShotTo(_player)){
            logger.info(`[${team.name}] GOOOOOOOOOOOOOOOOOOOL (${_player.nombre})`);
            this.score.addScoreForGoal(team);
            this.printScore();
        } else {
            logger.info(`[${team.name}] ${_player.nombre} Uhhhhh! pasó muy cerca! La pelota no entró al aro :(`)
        }
        _player.pelotas.pop();
        this.assignQuaffle(oponentTeam);
    }

    /**
     * Tell you if the Guardian make it
     * @param {*} _player 
     */
    savesShotTo(_player){
        const oponentTeam = this.getOponentTeamByPlayer(_player);
        const guardian = oponentTeam.players.filter(p => p.constructor.name == 'Guardian')[0];
        logger.info(`[${oponentTeam.name}] ${guardian.nombre} Intenta una increíble atajada!`)
        if(guardian.atajarLanzamiento() && guardian.energia > 80) {
            return false;
        } else { 
            logger.info(`[${oponentTeam.name}] ${guardian.nombre} atajó el lanzamiento!`)
            return true;
        }
    }

    beatsPlayer(_player){
        const team = this.getTeamByPlayer(_player);
        const oponentTeam = this.getOponentTeamByPlayer(_player);
        const oponent = this.getRandomOponent(_player);
        logger.info(`[${team.name}] ${_player.nombre} intenta golpear a [${oponentTeam.name}] ${oponent.nombre}`);
        if(this.hit()){
            (oponent.balls || []).shift();
            logger.info(`[${team.name}] ${_player.nombre} quemó a [${oponentTeam.name}] ${oponent.nombre} y este debe soltar una pelota`);
        } else {
            logger.info(`[${team.name}] ${_player.nombre} no pudo quemar a [${oponentTeam.name}] ${oponent.nombre}`);
        }
        _player.pelotas.pop();
        this.assignBludger(oponentTeam);
    }

    getLineups(){
        logger.info(`|------------------------------- NODE JS Academy - Quidditch ------------------------------|`);
        logger.info(`\x1b[32m|------------------------------------------------------------------------------------------|`);
        logger.info(`\x1b[32m|---------- ${this.teams[0].name}`);
        logger.info(`\x1b[32m|------------------------------------------------------------------------------------------|`);
        for(let i=0; i < this.playersPerTeam; i++){
            const playerA = {
                position: this.teams[0].players[i].constructor.name,
                name: this.teams[0].players[i].nombre,
            }
            const playerALine =`(${playerA.position}) ${playerA.name}`;
            logger.info(`\x1b[32m| >>>>>>>>> ${playerALine}`);
        }
        logger.info(`\x1b[34m|------------------------------------------------------------------------------------------|`);
        logger.info(`\x1b[34m|---------- ${this.teams[1].name}`);
        logger.info(`\x1b[34m|------------------------------------------------------------------------------------------|`);
        for(let i=0; i < this.playersPerTeam; i++){
            const playerB = {
                position: this.teams[1].players[i].constructor.name,
                name: this.teams[1].players[i].nombre,
            }
            const playerBLine = `(${playerB.position}) ${playerB.name}`;
            logger.info(`\x1b[34m| >>>>>>>>> ${playerBLine}`);
        }
        logger.info(`|------------------------------------------------------------------------------------------|`);
        logger.info(`\x1b[37m|-- powered by @banana-software.com -------------------------------------------------------|`);
    }

    printScore(){
        const score = this.score.getScore();
        logger.warn(score);
    }

    getScore(){
        return this.score.getScore();
    }

    /**
     * Teachs a player to talk to the platform
     * After this the player actions will have impact over platform resources
     * - throw to goal
     * - catch the snitch
     * - save shot
     * - beat oponent
     */
    teachPlayerToTalkToPlatform(_player, _role){
        switch (_role) {
            case 'Golpeador':
                _player.quemarJugador = () => {
                    this.beatsPlayer(_player);
                }                
                break;
            case 'Buscador':
                _player.perseguirSnitch = () => {
                    this.catchSnitch(_player);
                }
                break;
            case 'Cazador':
                _player.lanzarAlAro = () => {
                    this.makesGoal(_player);
                }
                break;
            case 'Guardian':
                _player.atajarLanzamiento = () => {
                    return this.hit();
                }
                break;
            default:
                break;
        }
    }

    getRandomOponent(_player){
        const randomIndex = Math.floor(Math.random() * 6);
        return this.teams[0].players.indexOf(_player) ? 
            this.teams[1].players[randomIndex] : this.teams[0].players[randomIndex];
    }

    getRandomTeamPlayer(_team){
        const randomIndex = Math.floor(Math.random() * 6);
        return _team.players[randomIndex];
    }

    getRandomTeamCazador(_team){
        const randomIndex = Math.floor(Math.random() * 3);
        return _team.players.filter((p) => {
            return p.constructor.name == 'Cazador';
        })[randomIndex];
    }

    getRandomTeamGolpeador(_team){
        const randomIndex = Math.floor(Math.random() * 2);
        return _team.players.filter((p) => {
            return p.constructor.name == 'Golpeador';
        })[randomIndex];
    }

    getTeamsReady(){
        this.teams.map(t => {
            t.players.map(p => {
                const role = p.constructor.name;
                if(!this.playersPerRole[role]) {
                    this.playersPerRole[role] = [];
                }
                this.teachPlayerToTalkToPlatform(p, role);
                this.playersPerRole[role].push(p);
            });
        });
    }

    whoHasTheSnitch(){
        return this.teams.filter(t => {
            return t.hasTheSnitch;
        })[0];
    }

    wait(milleseconds) {
        return new Promise(resolve => setTimeout(resolve, milleseconds))
    }

    async releaseSnitch(){
        return new Promise(resolve => setTimeout(() => {
            this.balls.push(new Snitch());
            logger.warn('THE SNITCH IS IN THA HOUSE');
            logger.warn('30 seconds to catch the snitch! Go go go!');
        }, 90000));
    }

    async run(){
        this.releaseSnitch();
        let players = [].concat(this.teams[0].players)
            .concat(this.teams[1].players)
            .sort(p => p.nombre);
        try {
            while((this.score.getLapsedMinutes() < this.duration) && this.snitchIsFree) {
                await Promise.each(players, async (p) => {
                    const team = this.getTeamByPlayer(p);
                    logger.info(`[${team.name}] ${p.nombre} is making a move`);
                    p.jugar();
                    await this.wait(1000);
                })
            }
        } catch (e) {
            if(e.message == 'SNITCH') {
                logger.warn('The snitch has been caught! Escribano!');
            } else {
                logger.error('Hubo un error en la plataforma');
                logger.error(e);
            }
        }
        logger.info('GAME OVER!');
        logger.info('Match Score:')
        logger.warn(this.score.getScore());
        if(!this.snitchIsFree){
            const team = this.whoHasTheSnitch();
            logger.info(`>>>>> ${team.name} Caught the Snitch & Won this game!`)
        } else {
            logger.info('And the winner is...');
            logger.info(this.score.getWinner().toUpperCase());
        }
    }

    async kickOff(){
        logger.warn('Getting teams ready');
        this.getTeamsReady();
        await this.wait(5000);
        this.getLineups()
        await this.wait(8000);
        logger.info('Releasing balls! Local has priority and recieves the balls firts');
        logger.warn('Assigning Bludgers...');
        this.assignBludger(this.teams[0]);
        this.assignBludger(this.teams[0]);
        this.assignBludger(this.teams[0]);
        logger.warn('Assigning Quaffle...');
        this.assignQuaffle(this.teams[0]);
        logger.info('The match will start in 5 seconds...');
        logger.info('~~~~~ Banana Software ~~~~~ NodeJS Quidditch Official Sponsor');
        logger.info('~~~~~ Banana Software ~~~~~ Send your resume to info@banana-software.com!');
        setTimeout(() => {
            logger.info('Piiiiiiiiiiiiii! The match has started!');
            this.run();
        }, 5000);
    }
}

module.exports = Match;