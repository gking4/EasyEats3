import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Page2Page } from '../page2/page2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   @ViewChild('myNav') nav: NavController
   public rootPage: any = HomePage;
constructor(public navCtrl: NavController) { }

/*this.nativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );

this.nativeStorage.getItem('myitem')
  .then(
    data => console.log(data),
    error => console.error(error)
  );*/

  go(){
    this.navCtrl.push(Page2Page);
  };
}