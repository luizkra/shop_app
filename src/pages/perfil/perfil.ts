import { Component, Input } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the Perfil page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 @Component({
 	selector: 'page-perfil',
 	templateUrl: 'perfil.html',
 })
 export class Perfil {
 	@Input('progress') progress; //bar_progress
 	@Input('progress2') progress2; //number_bar_progress
 	loadProgress: any;

 	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl: AlertController) {
 		this.loadProgress= 76; // number_progress_default
 		this.progress = this.loadProgress; 
 		this.progress2 = this.loadProgress+10; 
 		console.log("Progress: " + this.progress);
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad Perfil');
 	}

 	sendMessage() {
 		const alert = this.alertCtrl.create({
 			title: 'Mensaje',
 			inputs: [
 			{
 				name: 'Mensaje',
 				placeholder: 'Texto'
 			},
 			],
 			buttons: [
 			{
 				text: 'Cancelar',
 				role: 'cancel',
 				handler: data => {
 					console.log('Cancel clicked');
 				}
 			},
 			{
 				text: 'Enviar',
 				handler: data => {

 				}
 			}
 			]
 		});
 		alert.present();
 	}

 }
