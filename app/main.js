angular.module("Contactical", [])
    .service('contactService', function($http) {
        var service = this;

        service.get = function() {
            return $http.get('http://localhost:9001/contacts');  
        };
    })
    .controller("ListContact", function(contactService) {
        var controller = this;

        contactService.get().then(function(res) {
            controller.contacts = res.data;
        });
    })
    .filter("capitalize", function() {
        return function(input) {
            return input.split(' ').map(function (word) {
                return word[0].toUpperCase() + word.slice(1);
            }).join(' ');
        };
    })
    .directive('avatar', function() {
        return {
            restrict: 'AE',
            scope: {
                name: '='
            },
            template: '<b>{{ name[0] | capitalize }}</b>'
        };
    });
