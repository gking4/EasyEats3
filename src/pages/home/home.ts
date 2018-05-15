import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Page2Page } from '../page2/page2';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   @ViewChild('myNav') nav: NavController
   public rootPage: any = HomePage;
constructor(public navCtrl: NavController, private platform: Platform, private geolocation: Geolocation, private nativeStorage: NativeStorage) {
  platform.ready().then(
    (readySource) => {
         if(readySource=='cordova'){
            // start handling network stuff now
         }
        });
}

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
  //code from the internet, should just be getting current coords

  getLocation(){
    return this.geolocation.getCurrentPosition();
  }
  //uses geolocation to find devices coords, then uses native storage to save those numbers
  storeLocation(){
   var lat;
  var long;
   this.getLocation().then( res => {
     console.log(res.coords.latitude)
     lat = res.coords.latitude;
     console.log(lat)
     console.log(res.coords.longitude)
     long = res.coords.longitude
     console.log(long)
     this.nativeStorage.setItem('lat', {property:lat}).then( () => console.log('Stored item', error => console.error('Error storing item', error)));
     this.nativeStorage.setItem('long', {property:long}).then( () => console.log('Stored item', error => console.error('Error storing item', error)));
   }).catch( err => {
     console.log(err);
   })
   }
   //pushes page 2 onto the
   go(){
    this.navCtrl.push(Page2Page);
  }
  }



