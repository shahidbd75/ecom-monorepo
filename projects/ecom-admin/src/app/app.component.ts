import { Component } from '@angular/core';
import { IMenu } from 'projects/lib-ui-shared/src/lib/features/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Admin';
  menus: IMenu[] = [];

  ngOnInit(): void {
    this.menus = [
      { path: "pages/requisition", name: "Requisition" } as IMenu,
      { path: "pages/store", name: "Store" } as IMenu,
      { path: "pages/discount", name: "Discount" } as IMenu,
      { path: "pages/price", name: "Price" } as IMenu,
      { path: "pages/order", name: "Order" } as IMenu,
      { path: "pages/delivery", name: "Delivery Status" } as IMenu,
      { path: "pages/delivery-track", name: "Delivery Track" } as IMenu,
      { path: "pages/role", name: "User Role" } as IMenu,

    ];
  }
}
