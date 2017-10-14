import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { Details } from '../details/details';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	searchQuery: string = '';
	path: string='';  //path to image files
	products: Array<{id: number, title: string, price: number, image: string}>; // array of produtcs

	constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
		this.menuCtrl.enable(true); //enable Menu
		this.path='./assets/images/'; // sing path default
		this.initializeItems();

	}
	//open details
	viewDetails(event, item) {
		this.navCtrl.push(Details, {
			item: item
		});
	}

	initializeItems() {

		this.products = [
		{ id: 1, title: 'Producto 1', price: 123776, image: this.path+"Shape4_2.png" },
		{ id: 2, title: 'Producto 2', price: 3345, image: this.path+"Shape4_2.png" },
		{ id: 3, title: 'Producto 3', price: 345435, image: this.path+"Shape4_2.png" },
		{ id: 4, title: 'Producto 4', price: 123776, image: this.path+"Shape4_2.png" }
		];
	}

	getItems(ev: any) {
		// Reset items back to all of the items
		this.initializeItems();

		// set val to the value of the searchbar
		let val = ev.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.products = this.products.filter((item) => {
				return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}

}
