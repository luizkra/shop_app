import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


import { HomePage } from '../home/home';

/**
 * Generated class for the Login page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private  storage: Storage) {
  	this.menuCtrl.enable(false); //disable Menu
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
  goToLogin() {
  	this.storage.set('session', true);
	this.navCtrl.setRoot(HomePage);
  }

}
