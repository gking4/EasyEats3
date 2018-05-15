import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResturantPickerPage } from './resturant-picker';

@NgModule({
  declarations: [
    ResturantPickerPage,
  ],
  imports: [
    IonicPageModule.forChild(ResturantPickerPage),
  ],
})
export class ResturantPickerPageModule {}
