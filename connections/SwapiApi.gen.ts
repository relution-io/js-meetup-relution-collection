/**
    * @file ./SwapiApi.gen.ts
    * Created by Relution CLI on 19.08.2016
    * Copyright (c)
    * 2016
    * All rights reserved.
    */
import * as Q from 'q';
// Relution APIs
const connector = require('relution/connector.js');
/**
* @interface Peoples
*/
export interface Peoples {
  count?: number;
  next?: string;
  previous?: string;
  people?: People[];
}

/**
* @interface GetSpeciesOutput
*/
export interface GetSpeciesOutput {
  jsonBody?: string;
}

/**
* @interface GetStarshipsInput
*/
export interface GetStarshipsInput {
  id: string;
  rawBody?: any;
}

/**
* @interface GetFilmsOutput
*/
export interface GetFilmsOutput {
  jsonBody?: string;
}

/**
* @interface GetPeopleInput
*/
export interface GetPeopleInput {
  id: string;
  rawBody?: any;
}

/**
* @interface GetStarshipsOutput
*/
export interface GetStarshipsOutput {
  starships?: Starships;
}

/**
* @interface People
*/
export interface People {
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
* @interface GetSpeciesInput
*/
export interface GetSpeciesInput {
  id: string;
  rawBody?: any;
}

/**
* @interface GetPeopleOutput
*/
export interface GetPeopleOutput {
  people?: People;
}

/**
* @interface GetPlanetOutput
*/
export interface GetPlanetOutput {
  jsonBody?: string;
}

/**
* @interface GetVehiclesOutput
*/
export interface GetVehiclesOutput {
  jsonBody?: string;
}

/**
* @interface GetPeoplesInput
*/
export interface GetPeoplesInput {
  page: string;
  rawBody?: any;
}

/**
* @interface GetVehiclesInput
*/
export interface GetVehiclesInput {
  id: string;
  rawBody?: any;
}

/**
* @interface Starships
*/
export interface Starships {
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
* @interface GetPeoplesOutput
*/
export interface GetPeoplesOutput {
  peoples?: Peoples;
}

/**
* @interface GetPlanetInput
*/
export interface GetPlanetInput {
  id: string;
  rawBody?: any;
}

/**
* @interface GetFilmsInput
*/
export interface GetFilmsInput {
  id: string;
  rawBody?: any;
}

export class SwapiApiBaseConnection {
  constructor(public name = 'SwapiApi') { }

  configureSession(properties: any) {
    return connector.configureSession(this.name, properties);
  }

  /**
* SwapiApi['getFilms']
*
* /films/{id}#GET
*
* @params input 'Object' GetFilmsInput
* @return Promise GetFilmsOutput
*/
  public getFilms(input: GetFilmsInput): Q.Promise<GetFilmsOutput> {
    return connector.runCall(
      this.name,
      'getFilms',
      input
    );
  }

  /**
* SwapiApi['getPeople']
*
* /people/{id}#GET
*
* @params input 'Object' GetPeopleInput
* @return Promise GetPeopleOutput
*/
  public getPeople(input: GetPeopleInput): Q.Promise<GetPeopleOutput> {
    return connector.runCall(
      this.name,
      'getPeople',
      input
    );
  }

  /**
* SwapiApi['getPeoples']
*
* /peoples/{page}#GET
*
* @params input 'Object' GetPeoplesInput
* @return Promise GetPeoplesOutput
*/
  public getPeoples(input?: GetPeoplesInput): Q.Promise<GetPeoplesOutput> {
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
* @params input 'Object' GetPlanetInput
* @return Promise GetPlanetOutput
*/
  public getPlanet(input: GetPlanetInput): Q.Promise<GetPlanetOutput> {
    return connector.runCall(
      this.name,
      'getPlanet',
      input
    );
  }

  /**
* SwapiApi['getSpecies']
*
* /species/{id}#GET
*
* @params input 'Object' GetSpeciesInput
* @return Promise GetSpeciesOutput
*/
  public getSpecies(input: GetSpeciesInput): Q.Promise<GetSpeciesOutput> {
    return connector.runCall(
      this.name,
      'getSpecies',
      input
    );
  }

  /**
* SwapiApi['getStarships']
*
* /starships/{id}#GET
*
* @params input 'Object' GetStarshipsInput
* @return Promise GetStarshipsOutput
*/
  public getStarships(input: GetStarshipsInput): Q.Promise<GetStarshipsOutput> {
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
* @params input 'Object' GetVehiclesInput
* @return Promise GetVehiclesOutput
*/
  public getVehicles(input: GetVehiclesInput): Q.Promise<GetVehiclesOutput> {
    return connector.runCall(
      this.name,
      'getVehicles',
      input
    );
  }
}
