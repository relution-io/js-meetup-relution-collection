'use strict';

/**
 * @file ./SwapiApi.gen.ts
 * Simple MADP Application
 *
 * Created by Relution CLI on 16.08.2016
 * Copyright (c)
 * 2016
 * All rights reserved.
 */
import {SwapiApiBaseConnection, getPeople_input, getPeople_output} from './SwapiApi.gen';
const connector = require('relution/connector');
/**
 * SwapiApiConnection
 */
export class SwapiApiConnection extends SwapiApiBaseConnection {
  // user code goes here
  /**
  * SwapiApi['getPeople']
  *
  * /people/{id}#GET
  *
  * @params input 'Object' getPeople_input
  * @return Promise getPeople_output
  */
  public getSpecies(input: any): Q.Promise<any> {
      return connector.runCall(
      this.name,
      'getSpecies',
      input
    );
  }
}
