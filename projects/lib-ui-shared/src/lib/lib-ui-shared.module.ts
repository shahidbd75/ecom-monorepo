import { NgModule } from '@angular/core';
import { IdentifierModule } from './features/identifier/identifier.module';
import { MenuModule } from './features/menu/menu.module';



@NgModule({
  declarations: [
  ],
  imports: [
    IdentifierModule,
    MenuModule
  ],
  exports: [
    IdentifierModule,
    MenuModule
  ]
})
export class LibUISharedModule { }
