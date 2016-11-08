app.controller('serviceCtrl', function($scope, demoService) {
    console.log(demoService.serviceFN());
    $scope.dataFromService = demoService.serviceFN();
});

app.controller('factoryCtrl', function($scope, demoFactory) {
    console.log(demoFactory.factoryFN());
    
    $scope.dataFromFactory = demoFactory.factoryFN();
});