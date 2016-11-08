app.controller('demoCtrl', function($scope, $http, demoFactory) {
    $scope.result = demoService.getData();
});