import {Component, Input} from '@angular/core';
import {NavController, LoadingController, AlertController} from 'ionic-angular';
import { NgForm } from '@angular/common';
import {TabsPage} from './../tabs/tabs';
import * as Relution from 'relution-sdk';

@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  public credentials = {userName: 'pascal', password: 'hallo1234'};
  constructor(private nav: NavController, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {}

  onSubmit() {
    const loading = this.loadingCtrl.create({
      content: 'Please wait ...'
    });
    loading.present();
    // login on  the Relution server
    return Relution.web.login(
      {
        userName: this.credentials.userName,
        password: this.credentials.password
      },
      {
        offlineCapable: true // there are more options available checkout : https://relution-io.github.io/relution-sdk/interfaces/_core_init_.initoptions.html
      }
    )
    .then((resp) => {
      // go to the tab page
      this.nav.setRoot(TabsPage)
      .then(() => {
        loading.dismiss();
      })
      .catch((e: Error) => {
        console.error(e);
        loading.dismiss();
      });
    })
    .catch((e: Relution.web.HttpError) => { // checkout https://relution-io.github.io/relution-sdk/interfaces/_web_http_.httperror.html
      // error occured
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
