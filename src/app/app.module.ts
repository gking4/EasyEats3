import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Page2Page } from '../pages/page2/page2';
import { RestaurantPickerPage } from '../pages/restaurant-picker/restaurant-picker';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeStorage } from '@ionic-native/native-storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page2Page,
    RestaurantPickerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page2Page,
    RestaurantPickerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    HttpClientModule,
    Geolocation,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
