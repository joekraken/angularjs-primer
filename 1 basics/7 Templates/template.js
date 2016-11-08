// angular module to contain controller and custom directive
var mainMod = angular.module("mainMod", []);

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

// assign mock data and access by 2-way data binding
mainMod.controller('defaultCtrl', function($scope) {
    $scope.steps = phases;
});