import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPriceComponent } from './product-price.component';

const routes: Routes = [
  { path: '', component: ProductPriceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductPriceRoutingModule { }
