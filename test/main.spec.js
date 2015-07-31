describe("Contactial", function() {
    
    describe("contactService Service", function() {
        var contactService, $httpBackend;

        beforeEach(function() {
            module("Contactical");
            inject(function($injector) {
                contactService = $injector.get("contactService");
                $httpBackend = $injector.get("$httpBackend");
            });
        });

        it("should be defined in 'Contactial' module", function() {
            expect(contactService).not.toBeUndefined();
        });

        it("should access contact list on remote server", function() {
            expect(contactService.get).not.toBeUndefined();
            
            $httpBackend.expectGET("http://localhost:9001/contacts")
                .respond(200, []);

            contactService.get();
            // $httpBackend.flush(); 

            $httpBackend.verifyNoOutstandingExpectation();
        });

        it("should return promise get()", function() {
            $httpBackend.expectGET("http://localhost:9001/contacts")
                .respond(200, []);

            var promise = contactService.get();
            expect(promise.then).not.toBeUndefined();
        });
    });

    describe("List Contact Controller", function() {
        var contactService, $controller, $httpBackend;

        beforeEach(function() {
            module("Contactical");
            inject(function($injector) {
                contactService = $injector.get("contactService");
                $controller = $injector.get("$controller");
                $httpBackend = $injector.get("$httpBackend");
            });
        });

        it("get contact list from contactService", function() {

            $httpBackend.expectGET("http://localhost:9001/contacts")
                .respond(200, [{ name: 'A' }]);

            spyOn(contactService, 'get').and.callThrough();
            var controller = $controller("ListContact");

            expect(contactService.get).toHaveBeenCalled();

            $httpBackend.flush();

            expect(controller.contacts).toEqual(jasmine.any(Array));
            expect(controller.contacts[0]).toEqual({ name: 'A' });
        });
    });

    describe('Capitalize Filter', function() {
        var $filter;

        beforeEach(function() {
            module("Contactical");
            inject(function($injector) {
                $filter = $injector.get("$filter");
            });
        });

        it("should uppercase the first letter of firstname and lastname", function() {
            var capitalize = $filter("capitalize");
            expect(capitalize).not.toBeUndefined();
            expect(capitalize('kachontep piyanan')).toEqual('Kachontep Piyanan');
            expect(capitalize('kachontep')).toEqual('Kachontep');
        });
    });

    describe("avatar directive", function() {

        it("should show first letter of firstname in bold font", function() {
            module("Contactical");  
            inject(function($injector, $rootScope) {
                var contact = {
                    name: 'kachontep piyanan'
                };

                $rootScope.contact = contact;
                $compile = $injector.get("$compile");
                element = $compile("<avatar name='contact.name'></avatar>")($rootScope);

                $rootScope.$digest();

                expect(element.text()).toContain('K');
            });
        });        
    });
});
