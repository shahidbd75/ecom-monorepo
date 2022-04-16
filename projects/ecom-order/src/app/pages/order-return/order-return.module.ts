import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderReturnRoutingModule } from './order-return-routing.module';
import { OrderReturnComponent } from './order-return.component';


@NgModule({
  declarations: [
    OrderReturnComponent
  ],
  imports: [
    CommonModule,
    OrderReturnRoutingModule
  ]
})
export class OrderReturnModule { }
