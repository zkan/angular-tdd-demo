var Player = function() {
    this.score = 0;

    this.getScore = function() {
        return this.score;
    }

    this.wins = function() {
        if(this.score == 0) {
            this.score = 15;
        }
        else if(this.score == 15) {
            this.score = 30;
        }
        else if(this.score == 30) {
            this.score = 40;
        }
    }
}

var TennisGame = function(playerA, playerB) {
    this.playerA = playerA;
    this.playerB = playerB;

    this.showScore = function() {
        if(this.playerA.getScore() == 40 && this.playerB.getScore() == 40) {
            return "Deuce";
        }
        return convertScore(this.playerA.getScore()) + " - " + convertScore(this.playerB.getScore());
    }
}

convertScore = function(score) {
    if(score == 0) {
        return "Love"
    }
    else if(score == 15) {
        return "Fifteen"
    }
    else if(score == 30) {
        return "Thirty"
    }
    else if(score == 40) {
        return "Forty"
    }
}

gameScore = function(playerA, playerB) {
    return convertScore(playerA.getScore()) + ' - ' + convertScore(playerB.getScore());
};
