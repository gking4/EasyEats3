import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantPickerPage } from './restaurant-picker';

@NgModule({
  declarations: [
    RestaurantPickerPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantPickerPage),
  ],
})
export class RestaurantPickerPageModule {}
