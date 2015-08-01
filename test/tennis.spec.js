describe("tennis", function() {
    it("should return Love - Love when game starts", function() {
        var result = gameScore();
        expect(result).toEqual("Love - Love");
    });
});
