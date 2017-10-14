import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the Details page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 @Component({
   selector: 'page-details',
   templateUrl: 'details.html',
 })
export class Details {
   @ViewChild(Slides) slides: Slides;
   search:string;
   path_slider:string = '';
   path_icon:string = '';
   public myQuanty:number= 0; // number fon quanty
   public mySize:number= 0;   // number for size

   constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
     this.path_slider = './assets/images/';
     this.path_icon = './assets/images/';
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad Details');
   }

   goToSlide() {
     this.slides.slideTo(2, 500);
   }
   slideChanged() {
     let currentIndex = this.slides.getActiveIndex();
   }
   selectedFriends(){
     console.log('Hola');

   }

   // show product added
   productAlert() {
     const alert = this.alertCtrl.create({
       title: 'Producto agregado',
       subTitle: 'Producto',
       buttons: ['Aceptar']
     });
     alert.present();
   }
   goToSearch() {
     this.navCtrl.pop();

   }

}
