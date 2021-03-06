describe("fizzbuzz", function() {
    it("takes 3 then should return fizz", function() {
        var input = 3;
        var result = fizzbuzz(input);
        expect(result).toEqual("fizz");
    });

    it("takes 6 then should return fizz", function() {
        var input = 6;
        var result = fizzbuzz(input);
        expect(result).toEqual("fizz");
    });

    it("takes 5 then should return buzz", function() {
        var input = 5;
        var result = fizzbuzz(input);
        expect(result).toEqual("buzz");
    });

    it("takes 10 then should return buzz", function() {
        var input = 10;
        var result = fizzbuzz(input);
        expect(result).toEqual("buzz");
    });

    it("takes 15 then should return fizzbuzz", function() {
        var input = 15;
        var result = fizzbuzz(input);
        expect(result).toEqual("fizzbuzz");
    });

    it("takes 30 then should return fizzbuzz", function() {
        var input = 30;
        var result = fizzbuzz(input);
        expect(result).toEqual("fizzbuzz");
    });

    it("takes 1 then should return 1", function() {
        var input = 1;
        var result = fizzbuzz(input);
        expect(result).toEqual(1);
    });

    it("takes 2 then should return 2", function() {
        var input = 2;
        var result = fizzbuzz(input);
        expect(result).toEqual(2);
    });
});
