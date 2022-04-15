import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopProductListComponent } from './top-product-list.component';

const routes: Routes = [
  {path:'', component:TopProductListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopProductListRoutingModule { }
