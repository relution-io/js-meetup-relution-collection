import {getPeople_output} from '../../../../connections/SwapiApi.gen';
import {logout} from 'relution-sdk/lib/web';
import {Component} from '@angular/core';
import {NavController, LoadingController, AlertController} from 'ionic-angular';
import * as Relution from 'relution-sdk';
import {LoginPage} from './../login/login';

@Component({
  templateUrl: 'build/pages/user/user.html'
})
export class UserPage {
  public user: Relution.security.User; // https://relution-io.github.io/relution-sdk/interfaces/_security_roles_.user.html

  constructor(private navCtrl: NavController, private loadingCtrl: LoadingController, private alertCtrl: AlertController ) {
    this.user = Relution.security.getCurrentUser();
  }

  logout() {
    const loading = this.loadingCtrl.create({
      content: 'Please wait ...'
    });
    loading.present();
    // logged out on relution server
    Relution.web.logout()
    .then(() => {
      // after logout back to the LoginPage
      this.navCtrl.setRoot(LoginPage).then(() => {
        loading.dismiss();
      });
    })
    .catch((e: Relution.web.HttpError) => {
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: `${e.name} ${e.statusCode}`,
        subTitle: e.message,
        buttons: ['OK']
      });
      alert.present();
    });
  }
}
