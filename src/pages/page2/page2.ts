import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantPickerPage } from '../restaurant-picker/restaurant-picker';
import { Page3Page } from '../page3/page3';

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var foodChoices:string[] = ["Hamburger", "Mexican", "Pizza", "Italian",
                             "Chinese", "Japanese" ]
var randChoice; 

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

  leverPull(){
    randChoice = foodChoices[Math.floor(Math.random() * foodChoices.length)];
    document.getElementById("foodResults").innerHTML = randChoice;
  };
  go(){
    this.navCtrl.push(RestaurantPickerPage);
  };
  next(){
    this.navCtrl.push(Page3Page);
  };
}
