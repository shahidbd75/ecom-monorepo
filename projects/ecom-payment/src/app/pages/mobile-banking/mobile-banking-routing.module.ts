import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileBankingComponent } from './mobile-banking.component';

const routes: Routes = [
  { path: '', component: MobileBankingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileBankingRoutingModule { }
