angular.module("Contactical", [])
    .service("ContactService", function($http) {
        var service = this;

        service.contacts = [];

        this.get = function() {
            $http.get("http://localhost:9001/contacts/")
                .then(function(response) {
                    service.contacts = response.data;
                });
        };
    });
