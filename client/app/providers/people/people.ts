import {People as iPeople} from '../../../../connections/SwapiApi.gen';
import {Injectable} from '@angular/core';
import * as Relution from 'relution-sdk';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import {NavController, AlertController} from 'ionic-angular';

/*
  Generated class for the People provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class People {

  constructor(private alertCtrl: AlertController, private navCtrl: NavController) {}
  /**
   * @description  return a people by id
   * @return Observable<iPeople>
   */
  getPeople(id: number): Observable<{people: iPeople}> {
    return Observable.fromPromise(
      Relution.web.ajax({
        method: 'GET',
        url: `api/v1/swapi/people/${id}`
      }).catch((e) => {
        console.error(e);
      })
    );
  }
  /**
   * @description  return a people by id
   * @return Observable<Array<iPeople>>
   */
  getPeoples(): Observable<Array<iPeople>> {
    return Observable.fromPromise(
      Relution.web.ajax({
        method: 'GET',
        url: `api/v1/swapi/peoples`
      }).catch((e) => {
        this.onError(e);
      })
    );
  }

  onError(e) {
    const alert = this.alertCtrl.create({
      title: `${e.name}`,
      subTitle: e.message,
      buttons: ['OK']
    });
    alert.present();
  }
}
