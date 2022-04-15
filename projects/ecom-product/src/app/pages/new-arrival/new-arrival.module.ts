import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewArrivalRoutingModule } from './new-arrival-routing.module';
import { NewArrivalComponent } from './new-arrival.component';


@NgModule({
  declarations: [
    NewArrivalComponent
  ],
  imports: [
    CommonModule,
    NewArrivalRoutingModule
  ]
})
export class NewArrivalModule { }
