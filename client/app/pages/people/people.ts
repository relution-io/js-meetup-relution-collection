import {People as PeoplePrv} from '../../providers/people/people';
import {People as iPeople} from '../../../../connections/SwapiApi.gen';
import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/people/people.html',
  providers: [PeoplePrv]
})
export class PeoplePage {
  public model: iPeople;

  constructor(private navParams: NavParams, private navCtrl: NavController, private peopleSrv: PeoplePrv) {
    this.peopleSrv.getPeople(this.navParams.get('id'))
      .subscribe(
        (resp) => {
          this.model = resp.people;
        }
    );
  }
}
