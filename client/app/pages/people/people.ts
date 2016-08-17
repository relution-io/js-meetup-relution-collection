import {People} from '../../providers/people/people';
import {people} from '../../../../connections/SwapiApi.gen';
import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the PeoplePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/people/people.html',
  providers: [People]
})
export class PeoplePage {
  public model: people;

  constructor(private navCtrl: NavController, private peopleSrv: People) {
    this.peopleSrv.fetch()
      .subscribe(
        (resp) => {
          console.log(resp);
      }
    );
  }
}
