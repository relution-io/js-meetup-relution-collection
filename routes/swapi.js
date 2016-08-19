"use strict";
var SwapiApi_1 = require('../connections/SwapiApi');
function init(app) {
    var connection = new SwapiApi_1.SwapiApiConnection();
    app.get('/api/v1/swapi/people/:id', 
    /**
    * register the device on the push Service
    *
    * @param req containing body JSON to pass as input.
    * @param res result of call is provided as JSON body data.
    * @param next function to invoke error handling.
    */
    function serviceCall(req, res, next) {
        return connection.getPeople({ id: req.params.id })
            .then(function (result) {
            return res.json(result);
        }, next)
            .done();
    });
    app.get('/api/v1/swapi/peoples', 
    /**
    * register the device on the push Service
    *
    * @param req containing body JSON to pass as input.
    * @param res result of call is provided as JSON body data.
    * @param next function to invoke error handling.
    */
    function serviceCall(req, res, next) {
        return res.json(require('./peoples.json'));
    });
    app.get('/api/v1/swapi/starships/:id', 
    /**
    * register the device on the push Service
    *
    * @param req containing body JSON to pass as input.
    * @param res result of call is provided as JSON body data.
    * @param next function to invoke error handling.
    */
    function serviceCall(req, res, next) {
        return connection.getStarships({
            id: req.params.id
        })
            .then(function (result) {
            return res.json(result);
        }, next).done();
    });
}
exports.init = init;
//# sourceMappingURL=swapi.js.map