describe("ContactService", function() {
    it("should have contacts defined", function() {
        module("Contactical");
        inject(function(ContactService) {
            expect(ContactService.contacts).not.toBeUndefined();
        });
    });
});
