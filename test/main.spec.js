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

describe("ListContacts", function() {
    beforeEach(module("Contactical"));

    it("should call ContactService.get() and keep contacts in $scope", inject(function($controller, $injector, $rootScope) {
        // Arrange
        var $scope = $rootScope.$new();
        var ContactService = $injector.get("ContactService");
        spyOn(ContactService, 'get');

        // Action
        $controller("ListContacts", { $scope: $scope });

        // Assert
        expect(ContactService.get).toHaveBeenCalled();
        expect($scope.contacts).toBe(ContactService.contacts);
    }));
});

describe("Copitalize Filter", function() {
    var capitalize;

    beforeEach(module("Contactical"));

    beforeEach(inject(function($filter) {
        capitalize = $filter("capitalize");
    }));

    it("should capitalize first letter of each string after split", function() {
        var name = "kan ouivirach";

        expect(capitalize(name)).toEqual("Kan Ouivirach");
    });
});
