import {People as iPeople} from '../../../../connections/SwapiApi.gen';
import {Observable} from 'rxjs/Observable';
import {PeoplePage} from '../people/people';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {People as PeoplePrv} from '../../providers/people/people';

const _ = require('lodash');

@Component({
  templateUrl: 'build/pages/peoples/peoples.html',
  providers: [PeoplePrv]
})
export class PeoplesPage {
  public collection: any;
  public pushPage: PeoplePage;
  public lettersIndex = [];

  constructor(private navCtrl: NavController, private peopleSrv: PeoplePrv) {
    this.collection = [];
    this.peopleSrv.getPeoples()
      .subscribe(
        (resp: Array<iPeople>) => {
          this.collection = _.groupBy(_.orderBy(resp, ['name'], ['asc']), (people) => {
            return people.name[0].toUpperCase();
          });
          this.lettersIndex = Object.keys(this.collection);
        }
      );
  }

  /**
   * @todo prepare model on server side
   */
  itemSelected(people) {
    const params = people.url.split('/');
    // console.log(params);
    let id = Number(params[5]); // have to be on server side
    this.navCtrl.push(PeoplePage, {id: id});
  }
}
