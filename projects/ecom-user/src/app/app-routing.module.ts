import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pages/user', loadChildren: () => import('./pages/user/user.module').then(mod => mod.UserModule) },
  { path: 'pages/role', loadChildren: () => import('./pages/role/role.module').then(mod => mod.RoleModule) },
  { path: '', redirectTo: 'pages/user', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/user', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
