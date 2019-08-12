import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomeService } from 'src/app/home.service';
import { DisplayProduct } from './display/display.model';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  products: DisplayProduct[];
  displaySub: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private homeService: HomeService
  ) {
    this.initializeApp();
  }
  onFetchData() {
    this.displaySub = this.homeService._displaypages.subscribe(displaypages => {
      this.products = displaypages;
      });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.onFetchData();
    });
  }
}
