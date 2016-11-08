var mainMod = angular.module("mainApp", []);

mainMod.controller('defaultCtrl', function($scope) {
	// $scope allows 2-way data binding between JavaScript and markup page

	// static mock data in JSON format
	// NOTE: best practice is to retrieve JSON from a service 
	//       also, model should be decoupled from the controller
    $scope.steps = [{
			stepnumber : '1',
			title : 'requirements',
            description : 'gathering project requirements',
            completed : true
        },
        {
			stepnumber : '2',
			title : 'mock ups',
            description : 'create UML diagrams amd mock views',
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
        
        // returns the count for the number of completed steps/phases
        $scope.completedSteps = function() {
            var result = 0;
            
            angular.forEach($scope.steps, function (step) {
                result += ((step.completed === true)? 1 : 0);
            });
            return result;
        };
        
        // returns the count for the number of completed steps/phases        
        $scope.todoSteps = function() {
            var result = 0;
            
            angular.forEach($scope.steps, function (step) {
                result += ((step.completed === false)? 1 : 0);
            });
            return result;
        };
        
        // mouse hover event
        $scope.mouseEvent = function (event) {
            var newClass = "ng-scope";
            console.log(event.currentTarget.className);
            // get current styles
            if (event.currentTarget.className.includes('Orange')) {
                newClass += " Orange";
            }
            else {
                newClass += " Green";
            }
            // check mouse event type, apply italic style
            if (event.type == "mouseover") {
                newClass += " Italic";
            }
            else if (event.type == "mouseout") {
                newClass += " Regular"; 
            }
            // assign the style based on event
            event.currentTarget.className = newClass;
        };
        
        // return a style that applied with ng-style directive
        $scope.functionMyStyle = function() {
            return "{'border' : '1px solid black'}";
        };
});