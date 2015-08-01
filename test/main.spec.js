describe("ContactService", function() {
    var contactService;

    beforeEach(function() {
        module("Contactical");
        inject(function(ContactService) {
            contactService = ContactService;
        });
    });

    it("should have contacts defined", function() {
        expect(contactService.contacts).not.toBeUndefined();
    });

    it("should have contacts as an array", function() {
        expect(contactService.contacts).toEqual(jasmine.any(Array));
    });

    it("should request for contacts", inject(function($httpBackend) {
        // Arrange
        var data = [{name: "a"}, {name: "b"}];
        $httpBackend.expectGET("http://localhost:9001/contacts/")
            .respond(200, data);

        // Action
        contactService.get();
        $httpBackend.flush();

        // Assert
        expect(contactService.contacts.length).toEqual(2);
    }));
});
