var appTopStory = angular.module('selectStoryApp', []);

appTopStory.controller('selectStoryCtrl', function SelectStory($scope, $http, $window) {
	$scope.selectedStory = '';
	$scope.storyList = [];
	// $http is XMLHttpRequest object to communicate to HTTP servers
	// $http is a service that returns a promise to get and send data using AJAX
	$http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
		.then(function (data) {
			var array = data.data;
			for (var i = 0; i < array.length; i++) {
				var storyUrl = 'https://hacker-news.firebaseio.com/v0/item/' + array[i] + '.json?print.pretty';
				$http.get(storyUrl)
					.then(function(data){
						var aStory = data.data;
						$scope.storyList.push(aStory);
					},
					function(err) {
						console.log(err);
					});
			}
		},
		function(err) {
			console.log(err);
			$scope.selectedStory = 'Error retrieving list of stories';
		});
/*    $http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .success(function (data) {
			$scope.storyList = data;
			$scope.selectedStory;
        });  */
/*	$scope.update = function(story) {
	var URI = 'https://hacker-news.firebaseio.com/v0/item/' + story.id + '.json?print.pretty';
	// another AJAX call to get data	
	$http.get(URI)
			.success(function (storyData) {
				$scope.storyInfo = storyData;
		});
	}; */
	
	$scope.gotostory = function(url) {
		// $window is global reference to browser window
		// open link in a new tab
		$window.open(url);
	};
});

// ASSIGNMENT refactor the dropdown options to display story titles
// 			refactor the controller to associate story id to story title
