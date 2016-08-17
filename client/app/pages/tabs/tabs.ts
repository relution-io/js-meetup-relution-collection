import {Component} from '@angular/core';
import {PeoplePage} from './../people/people';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    this.tab1Root = PeoplePage;
  }
}
