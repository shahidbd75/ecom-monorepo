import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewArrivalComponent } from './new-arrival.component';

const routes: Routes = [
  {path:'', component: NewArrivalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewArrivalRoutingModule { }
