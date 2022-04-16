import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pages/order', loadChildren: () => import('./pages/order/order.module').then(mod => mod.OrderModule) },
  { path: 'pages/return', loadChildren: () => import('./pages/order-return/order-return.module').then(mod => mod.OrderReturnModule) },
  { path: '', redirectTo: 'pages/order', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/order', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
