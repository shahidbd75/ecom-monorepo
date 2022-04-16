import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashOnDeliveryRoutingModule } from './cash-on-delivery-routing.module';
import { CashOnDeliveryComponent } from './cash-on-delivery.component';


@NgModule({
  declarations: [
    CashOnDeliveryComponent
  ],
  imports: [
    CommonModule,
    CashOnDeliveryRoutingModule
  ]
})
export class CashOnDeliveryModule { }
