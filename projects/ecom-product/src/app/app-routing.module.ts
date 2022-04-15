import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { "path": "pages/top-selling-products", loadChildren: () => import('./pages/top-product-list/top-product-list.module').then(mod => mod.TopProductListModule) },
  { "path": "", redirectTo: "pages/top-selling-products", pathMatch: 'full' },
  { "path": "**", redirectTo: "pages/top-selling-products", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
