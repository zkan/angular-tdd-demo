angular.module("Contactical", [])
    .service("ContactService", function($http) {
        var service = this;

        service.contacts = [];

        this.get = function() {
            $http.get("http://localhost:9001/contacts/")
                .then(function(response) {
                    service.contacts.splice(0);
                    for(var i = 0; i < response.data.length; i++) {
                        service.contacts.push(response.data[i]);
                    }
                });
        };
    })
    .controller("ListContacts", function(ContactService, $scope) {
        $scope.contacts = ContactService.contacts;

        ContactService.get();
    });
