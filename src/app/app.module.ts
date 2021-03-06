import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Page2Page } from '../pages/page2/page2';
import { RestaurantPickerPage } from '../pages/restaurant-picker/restaurant-picker';
import { Page3Page } from '../pages/page3/page3';





@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page2Page,
    RestaurantPickerPage,
    Page3Page,

    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page2Page,
    RestaurantPickerPage,
    Page3Page,

    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
