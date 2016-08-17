import {people} from '../../../../connections/SwapiApi.gen';
import {Injectable} from '@angular/core';
import * as Relution from 'relution-sdk';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';

/*
  Generated class for the People provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class People {

  constructor() {}
  /**
   * return a people by id
   */
  fetch(id?: number): Observable<Relution.web.HttpResponse> {
    return Observable.fromPromise(
      Relution.web.ajax({
        method: 'GET',
        url: `api/v1/swapi/people/${id ? id :''}`
      })
    );
  }
}

