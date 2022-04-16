import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequisitionRoutingModule } from './requisition-routing.module';
import { RequisitionComponent } from './requisition.component';


@NgModule({
  declarations: [
    RequisitionComponent
  ],
  imports: [
    CommonModule,
    RequisitionRoutingModule
  ]
})
export class RequisitionModule { }
