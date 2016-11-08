app.factory('ajaxFactory', function($http) {
    var domain = 'https://swapi.co/api/starships/';

    // function returns the promise
    var getShip = function(id, successCallback, errorCallback) {
        $http.get(domain + id)
            .then(function(data) {
                successCallback(data);
            }, function(err) {
                errorCallback(err);
            });
    };

    return {
        getShip: getShip
    }
});