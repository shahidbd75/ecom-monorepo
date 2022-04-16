import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPriceRoutingModule } from './product-price-routing.module';
import { ProductPriceComponent } from './product-price.component';


@NgModule({
  declarations: [
    ProductPriceComponent
  ],
  imports: [
    CommonModule,
    ProductPriceRoutingModule
  ]
})
export class ProductPriceModule { }
