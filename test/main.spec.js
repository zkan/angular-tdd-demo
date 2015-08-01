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

    describe("get contacts", function() {
        var contacts;

        beforeEach(inject(function($injector) {
            $httpBackend = $injector.get("$httpBackend");

            var data = [{name: "a"}, {name: "b"}];
            $httpBackend.expectGET("http://localhost:9001/contacts/")
                .respond(200, data);

            contacts = contactService.contacts;

            contactService.get();
            $httpBackend.flush();
        }));

        it("should request for contacts", function() {
            expect(contactService.contacts.length).toEqual(2);
        });

        it("should keep contacts in the original instance", function() {
            expect(contactService.contacts).toBe(contacts);
        });
    });
});
