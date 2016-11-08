var app = angular.module('providerApp', []);

// mock data provided via an Angular global constant
app.constant('serviceData', {
    service : {
        value: 'an Angular service'
        ,pattern: 'Singleton pattern'
    }
});

// mock data provided via an Angular global constant
app.constant('factoryData', {
    factory : {
        value: 'an Angular factory'
        ,pattern: 'Factory pattern'
    }
});