import {PeoplesPage} from '../peoples/peoples';
import {Component} from '@angular/core';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;

  constructor() {
    this.tab1Root = PeoplesPage;
  }
}
