var app = angular.module('routingApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : 'views/home.html'
        // ,controller : 'homeController'
    })
    .when('/about', {
        templateUrl : 'views/about.html'
        ,controller : 'demoCtrl'
    })
    .when('/contact', {
        templateUrl : 'views/contact.html'
        // ,controller : 'contactContoller'
    })
    .otherwise({
        redirectTo : '/'
    });
})