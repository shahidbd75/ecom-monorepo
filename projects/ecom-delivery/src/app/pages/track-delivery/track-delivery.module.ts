import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackDeliveryRoutingModule } from './track-delivery-routing.module';
import { TrackDeliveryComponent } from './track-delivery.component';


@NgModule({
  declarations: [
    TrackDeliveryComponent
  ],
  imports: [
    CommonModule,
    TrackDeliveryRoutingModule
  ]
})
export class TrackDeliveryModule { }
