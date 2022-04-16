import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pages/cash-on-delivery', loadChildren: () => import('./pages/cash-on-delivery/cash-on-delivery.module').then(mod => mod.CashOnDeliveryModule) },
  { path: 'pages/card', loadChildren: () => import('./pages/card/card.module').then(mod => mod.CardModule) },
  { path: 'pages/mobile-banking', loadChildren: () => import('./pages/mobile-banking/mobile-banking.module').then(mod => mod.MobileBankingModule) },
  { path: '', redirectTo: 'pages/card', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/card', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
