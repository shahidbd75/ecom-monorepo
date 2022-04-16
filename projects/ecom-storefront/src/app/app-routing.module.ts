import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'pages/top-selling-products', loadChildren: () => import('../../../ecom-product/src/app/pages/top-product-list/top-product-list.module').then(m => m.TopProductListModule) },
  { path: 'pages/new-arrival', loadChildren: () => import('../../../ecom-product/src/app/pages/new-arrival/new-arrival.module').then(m => m.NewArrivalModule) },
  { path: 'pages/order', loadChildren: () => import('../../../ecom-order/src/app/pages/order/order.module').then(m => m.OrderModule) },
  { path: 'pages/card', loadChildren: () => import('../../../ecom-payment/src/app/pages/card/card.module').then(m => m.CardModule) },
  { path: 'pages/user', loadChildren: () => import('../../../ecom-user/src/app/pages/user/user.module').then(m => m.UserModule) },
  { path: 'pages/return', loadChildren: () => import('../../../ecom-order/src/app/pages/order-return/order-return.module').then(m => m.OrderReturnModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
