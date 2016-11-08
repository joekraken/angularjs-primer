app.factory('demoFactory', function($http) {
    var url = 'http://swapi.co/api/people/1';
    var result = '';

    var getData =  function() {
            $http.get(url).then(function(data){
                console.log(data);
                result = data;
                // return result;
            });
            return result;
    };
    return {
        getData : getData
    };
});
/*
app.factory('demoFactory', function($http) {
    var url = 'http://swapi.co/api/people/1';
    var result = '';
    $http.get(url).then(function(data){
        console.log(data);
        result = data;
    }, function(err) {
        console.log(err);
    });
    this.getData = function() {
        return { result };
    };
}
*/