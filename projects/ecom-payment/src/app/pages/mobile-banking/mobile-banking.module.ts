import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileBankingRoutingModule } from './mobile-banking-routing.module';
import { MobileBankingComponent } from './mobile-banking.component';


@NgModule({
  declarations: [
    MobileBankingComponent
  ],
  imports: [
    CommonModule,
    MobileBankingRoutingModule
  ]
})
export class MobileBankingModule { }
