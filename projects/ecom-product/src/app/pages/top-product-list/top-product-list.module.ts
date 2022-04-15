import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopProductListRoutingModule } from './top-product-list-routing.module';
import { TopProductListComponent } from './top-product-list.component';


@NgModule({
  declarations: [TopProductListComponent],
  imports: [
    CommonModule,
    TopProductListRoutingModule
  ],
})
export class TopProductListModule { }
