import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the RestaurantPickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-restaurant-picker',
  templateUrl: 'restaurant-picker.html',
})
export class RestaurantPickerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    platform.ready().then(
      (readySource) => {
           if(readySource=='cordova'){
              // start handling network stuff now
           }
          });
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPickerPage');
  }
  leverPullMaps(){

  }
}
