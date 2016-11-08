app.factory('demoFactory', function(factoryData){
    var result = {};

    var factoryFN = function() {
        if (factoryData && factoryData.factory) {
            result = factoryData.factory;
        }
        return result;
    };
    return {
        factoryFN : factoryFN
    }
});