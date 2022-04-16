import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderReturnComponent } from './order-return.component';

const routes: Routes = [
  { path: '', component: OrderReturnComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderReturnRoutingModule { }
