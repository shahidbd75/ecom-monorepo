import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pages/delivery-status', loadChildren: () => import('./pages/delivery-status/delivery-status.module').then(m => m.DeliveryStatusModule) },
  { path: 'pages/delivery-tracking', loadChildren: () => import('./pages/track-delivery/track-delivery.module').then(m => m.TrackDeliveryModule) },
  { path: "", redirectTo: "pages/delivery-tracking", pathMatch: 'full' },
  { path: "**", redirectTo: "pages/delivery-tracking", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
