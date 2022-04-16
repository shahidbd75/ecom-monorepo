import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibUISharedModule } from 'projects/lib-ui-shared/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibUISharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
