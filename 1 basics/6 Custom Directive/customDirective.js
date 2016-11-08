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

// custom directive to 'complete a task' by clicking the row
mainMod.directive('customDirective', function() {
    return {
        link : function(scope, element, attr) {
            element.on('click', function(event) {
                // get the index for the 'clicked' row
                var stepNumber = event.currentTarget.rowIndex;
                
                // do something if the step is not done
                if(scope.steps[stepNumber-1].completed == false) {
                    // change the step to completed
                    scope.steps[stepNumber - 1].completed = true;
                    event.currentTarget.cells.item(3).innerHTML = "true";
                    // alter font color to 'see' a change
                    event.currentTarget.style.color = "red";
                }
                // assignment refactor this code so that only the next incomplete step
                // can be completed.
            });
        }
    };
});