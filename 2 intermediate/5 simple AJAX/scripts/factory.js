app.factory('ajaxFactory', function($http) {
    var domain = 'https://swapi.co/api/people/';
    // function returns the promise
    var getCharacter = function(id) {
        return $http.get(domain + id);
    };

    return {
        getCharacter: getCharacter
    }
});