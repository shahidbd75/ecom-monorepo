import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports:[MenuComponent]
})
export class MenuModule { }
