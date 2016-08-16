"use strict";
// Relution APIs
var connector = require('relution/connector.js');
var SwapiApiBaseConnection = (function () {
    function SwapiApiBaseConnection(name) {
        if (name === void 0) { name = 'SwapiApi'; }
        this.name = name;
    }
    SwapiApiBaseConnection.prototype.configureSession = function (properties) {
        return connector.configureSession(this.name, properties);
    };
    /**
* SwapiApi['getMovies']
*
* /films/{id}#GET
*
* @params input 'Object' getMovies_input
* @return Promise getMovies_output
*/
    SwapiApiBaseConnection.prototype.getMovies = function (input) {
        return connector.runCall(this.name, 'getMovies', input);
    };
    /**
* SwapiApi['getPeople']
*
* /people/{id}#GET
*
* @params input 'Object' getPeople_input
* @return Promise getPeople_output
*/
    SwapiApiBaseConnection.prototype.getPeople = function (input) {
        return connector.runCall(this.name, 'getPeople', input);
    };
    /**
* SwapiApi['getPlanet']
*
* /planet/{id}#GET
*
* @params input 'Object' getPlanet_input
* @return Promise getPlanet_output
*/
    SwapiApiBaseConnection.prototype.getPlanet = function (input) {
        return connector.runCall(this.name, 'getPlanet', input);
    };
    /**
* SwapiApi['getSpecies']
*
* /species/{id}#GET
*
* @params input 'Object' getSpecies_input
* @return Promise getSpecies_output
*/
    SwapiApiBaseConnection.prototype.getSpecies = function (input) {
        return connector.runCall(this.name, 'getSpecies', input);
    };
    /**
* SwapiApi['getStarships']
*
* /starships/{id}#GET
*
* @params input 'Object' getStarships_input
* @return Promise getStarships_output
*/
    SwapiApiBaseConnection.prototype.getStarships = function (input) {
        return connector.runCall(this.name, 'getStarships', input);
    };
    /**
* SwapiApi['getVehicles']
*
* /vehicles/{id}#GET
*
* @params input 'Object' getVehicles_input
* @return Promise getVehicles_output
*/
    SwapiApiBaseConnection.prototype.getVehicles = function (input) {
        return connector.runCall(this.name, 'getVehicles', input);
    };
    return SwapiApiBaseConnection;
}());
exports.SwapiApiBaseConnection = SwapiApiBaseConnection;
//# sourceMappingURL=SwapiApi.gen.js.map