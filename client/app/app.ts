import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LoginPage} from './pages/login/login';
import * as Relution from 'relution-sdk';
const mway = 'https://mway.relution.io';
const local = 'https://pbrewing.mwaysolutions.com';
const home = 'http://192.168.99.100:8080';
@Component({
  template: '<ion-nav [root]="rootPage" relutiongray></ion-nav>'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = LoginPage;

    // initialized the Relution SDK
    Relution.init({
      serverUrl: home,
      application: 'jsMeetupRelution'
    })
    .then((info) => {
      console.log('Relution is ready');
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
