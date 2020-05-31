const moment = require('moment');
/**
 * Manages match score goal
 */
class Score {
    /**
     * Builds a fancy score for the match!
     * @param {Team}} _teamA
     * @param {Team} _teamB
     */
    constructor(_teamA, _teamB){
        this.startTime = moment();
        this.teamA = _teamA;
        this.teamB = _teamB;
        this.scores = [];
        this.scores[_teamA.name] = 0;
        this.scores[_teamB.name] = 0;
        this.lapsedTime = 0;
    }

    getWinner() {
        if(this.scores[this.teamA.name] 
            > this.scores[this.teamB.name]){
                return this.teamA.name;
            }
        else if(this.scores[this.teamA.name] 
            < this.scores[this.teamB.name]){
                return this.teamA.name;
            }
        else {
            return 'Fue un empate! Buuu!'
        }
    }

    addScoreForSnitch(_team) {
        this.scores[_team.name] += 30;
    }
    addScoreForGoal(_team) {
        this.scores[_team.name] += 10;
    }

    getLapsedMinutes(){
        const duration = moment.duration(moment().diff(this.startTime));
        return duration.minutes();
    }

    getLapsedTime(){
        const duration = moment().diff(this.startTime);
        return `${moment(duration).format("mm:ss")}`;
    }

    getScore() {        
        return `\x1b[31m\x1b[40m| -T- ${this.getLapsedTime()} ---- | [${this.teamA.name.toUpperCase()} (${this.scores[this.teamA.name]}) || ${this.teamB.name.toUpperCase()} (${this.scores[this.teamB.name]})]\x1b[0m`;
    }
}

module.exports = Score;