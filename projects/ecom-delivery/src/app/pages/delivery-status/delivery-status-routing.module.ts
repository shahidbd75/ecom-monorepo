import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryStatusComponent } from './delivery-status.component';

const routes: Routes = [
  { path: '', component: DeliveryStatusComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryStatusRoutingModule { }
