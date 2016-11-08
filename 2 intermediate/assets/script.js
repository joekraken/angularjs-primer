angular.module('lessonsApp', [])
    .controller('lessonsCtrl', function($scope) {
        $scope.lessonurl = './1 Basic Routing/index.html';
        $scope.changeLesson = function(src) {
            $scope.lessonurl = src;
        }
    });