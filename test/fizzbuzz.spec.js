describe("fizzbuzz", function(){
    it("fizzbuzz(1) should return 1", function(){
        expect(fizzbuzz(1)).toEqual(1);
    });

    it("fizzbuzz(2) should return 2", function(){
        expect(fizzbuzz(2)).toEqual(2);
    });

    it("fizzbuzz(3) should return fizz", function(){
        expect(fizzbuzz(3)).toEqual("fizz");
    });

    it("fizzbuzz(6) should return fizz", function(){
        expect(fizzbuzz(6)).toEqual("fizz");
    });

    it("fizzbuzz(5) should return buzz", function(){
        expect(fizzbuzz(5)).toEqual("buzz");
    });

    it("fizzbuzz(10) should return buzz", function(){
        expect(fizzbuzz(10)).toEqual("buzz");
    });
});
