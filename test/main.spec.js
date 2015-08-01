describe("ContactService", function() {
    it("should have contacts defined", function() {
        module("Contactical");
        inject(function(ContactService) {
            expect(ContactService.contacts).not.toBeUndefined();
        });
    });

    it("should have contacts as an array", function() {
        module("Contactical");
        inject(function(ContactService) {
            expect(ContactService.contacts).toEqual(jasmine.any(Array))
        });
    });
});
