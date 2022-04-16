import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryStatusRoutingModule } from './delivery-status-routing.module';
import { DeliveryStatusComponent } from './delivery-status.component';


@NgModule({
  declarations: [
    DeliveryStatusComponent
  ],
  imports: [
    CommonModule,
    DeliveryStatusRoutingModule
  ]
})
export class DeliveryStatusModule { }
