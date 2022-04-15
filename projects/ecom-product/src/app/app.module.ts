import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewArrivalModule} from './pages/new-arrival';
import { TopProductListModule } from './pages/top-product-list';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewArrivalModule,
    TopProductListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
