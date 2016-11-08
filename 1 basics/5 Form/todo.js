function TodoCtrl($scope) 
{
	// holds the list
    $scope.todos = [];
    // adds item to the ToDo list
    $scope.addTodo = function() 
	{
		if ($scope.todoText != null && $scope.todoText != "") {
			$scope.todos.push({ text:$scope.todoText, done:false });
			$scope.todoText = '';
			$scope.inputStyle = {background:'white'};
		}
		else {
			$scope.inputStyle = {background:'red'};
		}
    };
	// deletes finished/checked items from todo list
	$scope.remove = function() 
	{
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function(todo) {
			if (!todo.done) $scope.todos.push(todo);
		});
    };
}