import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantPickerPage } from '../restaurant-picker/restaurant-picker';

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//list of all food choices, all enabled by default, this will not change after filtering
var foodChoices:string[] = ["Hamburger", "Mexican", "Pizza", "Italian",
                             "Chinese", "Japanese", "American", "Barbecue",
                            "French", "Indian", "Italian", "Seafood",
                            "Steak", "Sushi", "Thai"  ]
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
  //selects a random choice from the food choice arry and then updates the button with the info
  leverPull(){
    randChoice = foodChoices[Math.floor(Math.random() * foodChoices.length)];
    document.getElementById("foodResults").innerHTML = randChoice;
  };
  //pushes page 3 onto the stack
  go(){
    this.navCtrl.push(RestaurantPickerPage);
  };
}
