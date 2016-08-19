"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file ./SwapiApi.gen.ts
 * Simple MADP Application
 *
 * Created by Relution CLI on 16.08.2016
 * Copyright (c)
 * 2016
 * All rights reserved.
 */
var SwapiApi_gen_1 = require('./SwapiApi.gen');
var connector = require('relution/connector.js');
/**
 * SwapiApiConnection
 */
var SwapiApiConnection = (function (_super) {
    __extends(SwapiApiConnection, _super);
    function SwapiApiConnection() {
        _super.apply(this, arguments);
    }
    /**
* SwapiApi['getPeoples']
*
* /people#GET
*
* @params input 'Object' GetPeoplesInput
* @return Promise GetPeoplesOutput
*/
    SwapiApiConnection.prototype.getPeoples = function (input) {
        return connector.runCall(this.name, 'getPeoples', { page: '1', rawBody: {} });
    };
    return SwapiApiConnection;
}(SwapiApi_gen_1.SwapiApiBaseConnection));
exports.SwapiApiConnection = SwapiApiConnection;
//# sourceMappingURL=SwapiApi.js.map