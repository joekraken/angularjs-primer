app.controller('ajaxCtrl', function($scope, ajaxFactory) {
    var successFunction = function(ship) {
        $scope.ship = ship.data.name;
    }
    var errorFunction = function(err) {
        $scope.ship = err;
    };

    ajaxFactory.getShip(10, successFunction, errorFunction);

    // ajaxFactory.getShip(10, function(ship) {
    //     $scope.ship = ship.data.name;
    // }, function(err) {
    //     $scope.ship = err;
    // });
});