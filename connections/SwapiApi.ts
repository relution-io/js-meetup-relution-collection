import {GetPeoplesOutput} from './SwapiApi.gen';
import {GetPeoplesInput} from './SwapiApi.gen';
/**
 * @file ./SwapiApi.gen.ts
 * Simple MADP Application
 *
 * Created by Relution CLI on 16.08.2016
 * Copyright (c)
 * 2016
 * All rights reserved.
 */
import {SwapiApiBaseConnection} from './SwapiApi.gen';
const connector = require('relution/connector.js');
/**
 * SwapiApiConnection
 */
export class SwapiApiConnection extends SwapiApiBaseConnection {
    /**
* SwapiApi['getPeoples']
*
* /people#GET
*
* @params input 'Object' GetPeoplesInput
* @return Promise GetPeoplesOutput
*/
  public getPeoples(input?: GetPeoplesInput) {
    return connector.runCall(
      this.name,
      'getPeoples',
      {page: '1', rawBody: {}}
    );
  }
}
