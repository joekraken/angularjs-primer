var mainMod = angular.module("mainMod", ['ngRoute']);


// setup routing of views
mainMod.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/allTasks', {
        templateUrl : 'allTasks.html',
        controller : 'ShowAllTasks'
    }).when('/completedTasks', {
        templateUrl : 'doneTasks.html',
        controller : 'ShowCompletedTasks'
    }).when('/incompleteTasks', {
        templateUrl : 'notdoneTasks.html',
        controller : 'ShowTodoTasks'
    }).otherwise({
        redirectto : '/allTasks'
    });
}]);

// controller to show completed tasks
mainMod.controller('ShowAllTasks', function($scope) {
    $scope.allsteps = phases;
});

// controller to show completed tasks
mainMod.controller('ShowCompletedTasks', function($scope) {
    $scope.donesteps = [];
    angular.forEach(phases, function(phase) {
        if (phase.completed) $scope.donesteps.push(phase);
    });
});

// controller to show incomplete tasks
mainMod.controller('ShowTodoTasks', function($scope) {
    $scope.todosteps = [];
    angular.forEach(phases, function(phase) {
        if (phase.completed == false) $scope.todosteps.push(phase);
    });
});

// mock data stored as json
var phases = [{
			stepnumber : '1',
			title : 'requirements',
            description : 'gathering project requirements',
            completed : true
        },
        {
			stepnumber : '2',
			title : 'mock ups',
            description : 'create UML diagrams and mock views',
            completed : true
        },
        {
  			stepnumber : '3',
			title : 'coding',
            description : 'write code and develop running application',
            completed : false
        },
		{
			stepnumber : '4',
			title : 'testing',
            description : 'generate and execute unit test',
            completed : false
        },
		{
			stepnumber : '5',
			title : 'build',
            description : 'create a deployable package',
            completed : false
        },
		{
			stepnumber : '6',
			title : 'deployment',
            description : 'deploy application to production server',
            completed : false
        }];
