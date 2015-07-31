describe("greet function", function() {

    it("greet() return 'Hello'", function() {
        var msg = greet();

        expect(msg).toEqual('Hello');
    });

    it("greet('Kong') return 'Hello Kong'", function() {
        var msg = greet('Kong');

        expect(msg).toEqual('Hello Kong');
    });

    it("greet('Helen') return 'Dear Helen'", function() {
        var msg = greet('Helen');

        expect(msg).toEqual('Dear Helen');
    });
});
