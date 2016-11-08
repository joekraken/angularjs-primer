var app = angular.module('cartApp', []);

app.controller('cartCtrl', function($scope) {
	// $scope allows 2-way data binding between JavaScript and markup page
    $scope.openOneAtATime = true;
    $scope.trueValue = true;

	// static mock data in JSON format
	// NOTE: best practice is to retrieve JSON from a service 
	//       also, model should be decoupled from the controller
    $scope.order = {
        items: [{
            description: 'plate',
            qty: 5,
            cost: 9.10
        },
        {
            description: 'bowl',
            qty: 2,
            cost: 5.50
        },
        {
            description: 'cup',
            qty: 10,
            cost: 2.25
        }]
    };

	// function to delete an item from the shopping cart
    $scope.removeItem = function (index) {
        $scope.order.items.splice(index, 1);
    };

	// return total cost of shopping cart
    $scope.total = function () {
        var total = 0;
		// forEach is like C# foreach loop
		// 1st parameter is a collection, list, or array
		// 2nd parameter is function that performs an action on each item
        angular.forEach($scope.order.items, function (item) {
            total += item.qty * item.cost;
        });
        return total;
    };
});