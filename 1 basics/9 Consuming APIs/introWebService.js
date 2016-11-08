var appTopStory = angular.module('topStoryApp', []);

// controller to get first story of the day.  assuming this is always success
appTopStory.controller('topStoryCtrl', function TopStory($scope, $http, $window) {
	// $http is XMLHttpRequest object to communicate to HTTP servers
	// $http is a promise object to get and send data using AJAX
	// this uses the hacker news API service
    $http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .success(function (data) {
			$scope.storyList = data;
			var storyIDEN = $scope.storyList[0];
            var URI = 'https://hacker-news.firebaseio.com/v0/item/' + storyIDEN + '.json?print.pretty';
			// another ajax request
            $http.get(URI)
				.success(function (storyData) {
					$scope.storyInfo = storyData;
            });
        });

	$scope.gotostory = function(url) {
		// $window is global reference to browser window
		// open url in a new tab
		$window.open(url);
	};
});
