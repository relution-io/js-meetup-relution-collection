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
  * SwapiApi['getFilms']
  *
  * /films/{id}#GET
  *
  * @params input 'Object' GetFilmsInput
  * @return Promise GetFilmsOutput
  */
    SwapiApiBaseConnection.prototype.getFilms = function (input) {
        return connector.runCall(this.name, 'getFilms', input);
    };
    /**
  * SwapiApi['getPeople']
  *
  * /people/{id}#GET
  *
  * @params input 'Object' GetPeopleInput
  * @return Promise GetPeopleOutput
  */
    SwapiApiBaseConnection.prototype.getPeople = function (input) {
        return connector.runCall(this.name, 'getPeople', input);
    };
    /**
  * SwapiApi['getPeoples']
  *
  * /peoples/{page}#GET
  *
  * @params input 'Object' GetPeoplesInput
  * @return Promise GetPeoplesOutput
  */
    SwapiApiBaseConnection.prototype.getPeoples = function (input) {
        return connector.runCall(this.name, 'getPeoples', input);
    };
    /**
  * SwapiApi['getPlanet']
  *
  * /planet/{id}#GET
  *
  * @params input 'Object' GetPlanetInput
  * @return Promise GetPlanetOutput
  */
    SwapiApiBaseConnection.prototype.getPlanet = function (input) {
        return connector.runCall(this.name, 'getPlanet', input);
    };
    /**
  * SwapiApi['getSpecies']
  *
  * /species/{id}#GET
  *
  * @params input 'Object' GetSpeciesInput
  * @return Promise GetSpeciesOutput
  */
    SwapiApiBaseConnection.prototype.getSpecies = function (input) {
        return connector.runCall(this.name, 'getSpecies', input);
    };
    /**
  * SwapiApi['getStarships']
  *
  * /starships/{id}#GET
  *
  * @params input 'Object' GetStarshipsInput
  * @return Promise GetStarshipsOutput
  */
    SwapiApiBaseConnection.prototype.getStarships = function (input) {
        return connector.runCall(this.name, 'getStarships', input);
    };
    /**
  * SwapiApi['getVehicles']
  *
  * /vehicles/{id}#GET
  *
  * @params input 'Object' GetVehiclesInput
  * @return Promise GetVehiclesOutput
  */
    SwapiApiBaseConnection.prototype.getVehicles = function (input) {
        return connector.runCall(this.name, 'getVehicles', input);
    };
    return SwapiApiBaseConnection;
}());
exports.SwapiApiBaseConnection = SwapiApiBaseConnection;
//# sourceMappingURL=SwapiApi.gen.js.map