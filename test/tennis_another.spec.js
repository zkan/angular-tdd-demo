describe("tennis", function() {
    it("should return Love - Love when game starts", function() {
        var game = new TennisGame();
        var result = game.showScore();
        expect(result).toEqual("Love - Love");
    });

    it("should return Fifteen - Love when A scores", function() {
        var game = new TennisGame();
        game.scoreByA();
        var result = game.showScore();
        expect(result).toEqual("Fifteen - Love");
    });

    it("should return Thirty - Love when A scores", function() {
        var game = new TennisGame();
        game.scoreByA();
        game.scoreByA();
        var result = game.showScore();
        expect(result).toEqual("Thirty - Love");
    });
});
