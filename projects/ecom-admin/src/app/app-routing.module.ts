import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('../../../ecom-admin/src/app/home/home.module').then(m => m.HomeModule) },
  { path: 'pages/requisition', loadChildren: () => import('../../../ecom-inventory/src/app/pages/requisition/requisition.module').then(m => m.RequisitionModule) },
  { path: 'pages/store', loadChildren: () => import('../../../ecom-inventory/src/app/pages/store/store.module').then(m => m.StoreModule) },
  { path: 'pages/discount', loadChildren: () => import('../../../ecom-price/src/app/pages/discount/discount.module').then(m => m.DiscountModule) },
  { path: 'pages/price', loadChildren: () => import('../../../ecom-price/src/app/pages/product-price/product-price.module').then(m => m.ProductPriceModule) },
  { path: 'pages/order', loadChildren: () => import('../../../ecom-order/src/app/pages/order/order.module').then(m => m.OrderModule) },
  { path: 'pages/delivery', loadChildren: () => import('../../../ecom-delivery/src/app/pages/delivery-status/delivery-status.module').then(m => m.DeliveryStatusModule) },
  { path: 'pages/delivery-track', loadChildren: () => import('../../../ecom-delivery/src/app/pages/track-delivery/track-delivery.module').then(m => m.TrackDeliveryModule) },
  { path: 'pages/role', loadChildren: () => import('../../../ecom-user/src/app/pages/role/role.module').then(m => m.RoleModule) },
  { path: 'pages/return', loadChildren: () => import('../../../ecom-order/src/app/pages/order-return/order-return.module').then(m => m.OrderReturnModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
