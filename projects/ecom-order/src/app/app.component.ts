import { Component, OnInit } from '@angular/core';
import { IMenu } from 'projects/lib-ui-shared/src/lib/features/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Order Management';
  menus: IMenu[] = [];
  ngOnInit(): void {
    this.menus = [
      { path: "/pages/order", name: "Order" } as IMenu,
      { path: "/pages/return", name: "Return" } as IMenu,
    ];
  }

}
