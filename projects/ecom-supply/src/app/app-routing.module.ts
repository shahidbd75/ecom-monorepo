import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'supply/supplier', loadChildren: () => import('./pages/supplier/supplier.module').then(mod => mod.SupplierModule) },
  { path: 'supply/distributor', loadChildren: () => import('./pages/distributor/distributor.module').then(mod => mod.DistributorModule) },
  { path: '', redirectTo: 'supply/supplier', pathMatch: 'full' },
  { path: '**', redirectTo: 'supply/supplier', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
