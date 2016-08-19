import {People as PeoplePrv} from '../../providers/people/people';
import {People as iPeople} from '../../../../connections/SwapiApi.gen';
import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the PeoplePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/people/people.html',
  providers: [PeoplePrv]
})
export class PeoplePage {
  public model: iPeople;

  constructor(private navCtrl: NavController, private peopleSrv: PeoplePrv) {
    this.peopleSrv.getPeople(1)
      .subscribe(
        (resp) => {
          console.log(resp);
        }
    );
  }
}
