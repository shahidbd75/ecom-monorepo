import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackDeliveryComponent } from './track-delivery.component';

const routes: Routes = [
  {path: '', component: TrackDeliveryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackDeliveryRoutingModule { }
