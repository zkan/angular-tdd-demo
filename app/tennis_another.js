var TennisGame = function() {
    this.playerAScore = 0;
    this.playerBScore = 0;

    this.scoreByA = function() {
        if(this.playerAScore == 15) {
            this.playerAScore = 30;
        }
        else {
            this.playerAScore = 15;
        }
    };

    this.showScore = function() {
        if(this.playerAScore == 15 && this.playerBScore == 0) {
            return "Fifteen - Love";
        }
        else if(this.playerAScore == 30 && this.playerBScore == 0) {
            return "Thirty - Love";
        }
        return "Love - Love";
    };
};
