app.service('demoService', function(serviceData) {
    var result = {};

    this.serviceFN = function() {
        if (serviceData && serviceData.service) {
            result = serviceData.service;
        }
        return result;
    };
});