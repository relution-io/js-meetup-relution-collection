/**
* @file ./SwapiApi.gen.ts
* Created by Relution CLI on 17.08.2016
* Copyright (c)
* 2016
* All rights reserved.
*/
import * as Q from 'q';
// Relution APIs
const connector = require('relution/connector.js');
/**
* @interface peoples
*/
export interface peoples {
  count?: string;
  next?: string;
  previous?: string;
  people?: people[];
}

/**
* @interface getSpecies_output
*/
export interface getSpecies_output {
  jsonBody?: string;
}

/**
* @interface getMovies_input
*/
export interface getMovies_input {
  id: string;
  rawBody?: any;
}

/**
* @interface getStarships_input
*/
export interface getStarships_input {
  id: string;
  rawBody?: any;
}

/**
* @interface getMovies_output
*/
export interface getMovies_output {
  jsonBody?: string;
}

/**
* @interface getPeople_input
*/
export interface getPeople_input {
  id: string;
  rawBody?: any;
}

/**
* @interface getStarships_output
*/
export interface getStarships_output {
  starships?: starships;
}

/**
* @interface people
*/
export interface people {
  starships?: string[];
  height?: string;
  hair_color?: string;
  vehicles?: string[];
  birth_year?: string;
  skin_color?: string;
  mass?: string;
  name?: string;
  films?: string[];
  species?: string[];
  eye_color?: string;
  gender?: string;
  url?: string;
  homeworld?: string;
}

/**
* @interface getSpecies_input
*/
export interface getSpecies_input {
  id: string;
  rawBody?: any;
}

/**
* @interface getPeople_output
*/
export interface getPeople_output {
  people?: people;
}

/**
* @interface getPlanet_output
*/
export interface getPlanet_output {
  jsonBody?: string;
}

/**
* @interface getVehicles_output
*/
export interface getVehicles_output {
  jsonBody?: string;
}

/**
* @interface getPeoples_input
*/
export interface getPeoples_input {
  rawBody?: any;
}

/**
* @interface getVehicles_input
*/
export interface getVehicles_input {
  id: string;
  rawBody?: any;
}

/**
* @interface starships
*/
export interface starships {
  consumables?: string;
  model?: string;
  passengers?: string;
  url?: string;
  manufacturer?: string;
  length?: string;
  cost_in_credits?: string;
  created?: string;
  cargo_capacity?: string;
  starship_class?: string;
  edited?: string;
  films?: string[];
  name?: string;
  MGLT?: string;
  pilots?: string[];
  hyperdrive_rating?: string;
  crew?: string;
  max_atmosphering_speed?: string;
}

/**
* @interface getPeoples_output
*/
export interface getPeoples_output {
  peoples?: peoples;
}

/**
* @interface getPlanet_input
*/
export interface getPlanet_input {
  id: string;
  rawBody?: any;
}

export class SwapiApiBaseConnection {
  constructor(public name = 'SwapiApi') { }

  configureSession(properties: any) {
    return connector.configureSession(this.name, properties);
  }

  /**
* SwapiApi['getMovies']
*
* /films/{id}#GET
*
* @params input 'Object' getMovies_input
* @return Promise getMovies_output
*/
  public getMovies(input: getMovies_input): Q.Promise<getMovies_output> {
    return connector.runCall(
      this.name,
      'getMovies',
      input
    );
  }

  /**
* SwapiApi['getPeople']
*
* /people/{id}#GET
*
* @params input 'Object' getPeople_input
* @return Promise getPeople_output
*/
  public getPeople(input: getPeople_input): Q.Promise<getPeople_output> {
    return connector.runCall(
      this.name,
      'getPeople',
      input
    );
  }

  /**
* SwapiApi['getPeoples']
*
* /people#GET
*
* @params input 'Object' getPeoples_input
* @return Promise getPeoples_output
*/
  public getPeoples(input: getPeoples_input): Q.Promise<getPeoples_output> {
    return connector.runCall(
      this.name,
      'getPeoples',
      input
    );
  }

  /**
* SwapiApi['getPlanet']
*
* /planet/{id}#GET
*
* @params input 'Object' getPlanet_input
* @return Promise getPlanet_output
*/
  public getPlanet(input: getPlanet_input): Q.Promise<getPlanet_output> {
    return connector.runCall(
      this.name,
      'getPlanet',
      input
    );
  }



  /**
* SwapiApi['getStarships']
*
* /starships/{id}#GET
*
* @params input 'Object' getStarships_input
* @return Promise getStarships_output
*/
  public getStarships(input: getStarships_input): Q.Promise<getStarships_output> {
    return connector.runCall(
      this.name,
      'getStarships',
      input
    );
  }

  /**
* SwapiApi['getVehicles']
*
* /vehicles/{id}#GET
*
* @params input 'Object' getVehicles_input
* @return Promise getVehicles_output
*/
  public getVehicles(input: getVehicles_input): Q.Promise<getVehicles_output> {
    return connector.runCall(
      this.name,
      'getVehicles',
      input
    );
  }
}
