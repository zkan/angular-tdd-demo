describe("tennis", function() {
    var playerA, playerB, game;

    beforeEach(function() {
        playerA = new Player();
        playerB = new Player();
        game = new TennisGame(playerA, playerB);
    });

    it("should return Love - Love when game starts", function() {
        var result = game.showScore();
        expect(result).toEqual("Love - Love");
    });

    it("should return Fifteen - Love when A scores first time", function() {
        playerA.wins();

        var result = game.showScore();
        expect(result).toEqual("Fifteen - Love");
    });

    it("should return Thirty - Love when A scores second time", function() {
        playerA.wins();
        playerA.wins();

        var result = game.showScore();
        expect(result).toEqual("Thirty - Love");
    });

    it("should return Forty - Love when A scores third time", function() {
        playerA.wins();
        playerA.wins();
        playerA.wins();

        var result = game.showScore();
        expect(result).toEqual("Forty - Love");
    });

    it("should return Love - Fifteen when B scores first time", function() {
        playerB.wins();

        var result = game.showScore();
        expect(result).toEqual("Love - Fifteen");
    });

    it("should return Love - Thirty when B scores second time", function() {
        playerB.wins();
        playerB.wins();

        var result = game.showScore();
        expect(result).toEqual("Love - Thirty");
    });

    it("should return Love - Forty when B scores third time", function() {
        playerB.wins();
        playerB.wins();
        playerB.wins();

        var result = game.showScore();
        expect(result).toEqual("Love - Forty");
    });

    it("should return Fifteen - Forty when A scores first time and B scores third time", function() {
        playerB.wins();
        playerB.wins();
        playerA.wins();
        playerB.wins();

        var result = game.showScore();
        expect(result).toEqual("Fifteen - Forty");
    });

    it("should return Deuce when A gets 40 and B also gets 40", function() {
        playerB.wins();
        playerB.wins();
        playerA.wins();
        playerB.wins();
        playerA.wins();
        playerA.wins();

        var result = game.showScore();
        expect(result).toEqual("Deuce");
    });
});

describe("score for player", function() {
    it("takes 0 should return Love", function() {
        var result = convertScore(0);
        expect(result).toEqual("Love");
    });

    it("takes 15 should return Fifteen", function() {
        var result = convertScore(15);
        expect(result).toEqual("Fifteen");
    });

    it("takes 30 should return Thirty", function() {
        var result = convertScore(30);
        expect(result).toEqual("Thirty");
    });

    it("takes 40 should return Forty", function() {
        var result = convertScore(40);
        expect(result).toEqual("Forty");
    });
});

describe("get score", function() {
    it("has score 0 then should return 0", function() {
        var playerA = new Player();
        playerA.score = 0;
        var result = playerA.getScore();
        expect(result).toEqual(0);
    });

    it("has score 15 then should return 15", function() {
        var playerA = new Player();
        playerA.score = 15;
        var result = playerA.getScore();
        expect(result).toEqual(15);
    });
});

describe("wins", function() {
    it("wins first time then should return 15", function() {
        var playerA = new Player();
        playerA.wins();
        var result = playerA.getScore();
        expect(result).toEqual(15);
    });

    it("wins second time then should return 30", function() {
        var playerA = new Player();
        playerA.wins();
        playerA.wins();
        var result = playerA.getScore();
        expect(result).toEqual(30);
    });

    it("wins third time then should return 40", function() {
        var playerA = new Player();
        playerA.wins();
        playerA.wins();
        playerA.wins();
        var result = playerA.getScore();
        expect(result).toEqual(40);
    });
});
