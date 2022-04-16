import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pages/requisition', loadChildren: () => import('./pages/requisition/requisition.module').then(mod => mod.RequisitionModule) },
  { path: 'pages/store', loadChildren: () => import('./pages/store/store.module').then(mod => mod.StoreModule) },
  { path: '', redirectTo: 'pages/requisition', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/requisition', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
