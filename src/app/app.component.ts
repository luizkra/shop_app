import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Perfil } from '../pages/perfil/perfil';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private  storage: Storage) {
    //verific session
    storage.get('session').then(
      data => {
        console.log("Session is "+ data);
        if (data== null || data == false) {
          this.rootPage = Login;
          this.initializeApp();
        }
        else{
          this.rootPage = HomePage;
          this.initializeApp();
        }
      },
      error => {
        this.rootPage = Login;
        this.initializeApp();
      }
      );

    // used for an example of ngFor and navigation
    this.pages = [
    { title: 'Home', component: HomePage },
    { title: 'Perfil', component: Perfil }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  logout(){

    this.storage.set('session', false);
    this.nav.setRoot(Login).then(() => {
      const index = this.nav.getActive().index;
      this.nav.remove(0, index);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
