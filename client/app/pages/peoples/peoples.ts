import {People as iPeople} from '../../../../connections/SwapiApi.gen';
import {Observable} from 'rxjs/Observable';
import {PeoplePage} from '../people/people';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {People as PeoplePrv} from '../../providers/people/people';


const _ = require('lodash');
/*
  Generated class for the PeoplesPage page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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
  itemSelected(people) {
    console.log(people);
  }
}
