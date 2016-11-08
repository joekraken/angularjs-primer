app.controller('ajaxCtrl', function($scope, ajaxFactory) {
    var getCharacterById = function(id) {
        // get promise from the Factory
        var promise = ajaxFactory.getCharacter(id);
        // then() executes when promise completes
        promise
        .then(function(data) {
            $scope.data = data;
            console.log(data);
        }
        , function(err) {
            console.log('ERROR: ajax failed');
            console.log(err);
            $scope.data = err.statusText;
        });
    };

    // execute the function
    getCharacterById(1);
});