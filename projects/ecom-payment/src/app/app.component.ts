import { Component } from '@angular/core';
import { IMenu } from 'projects/lib-ui-shared/src/lib/features/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Payment Management';
  menus: IMenu[] = [];
  ngOnInit(): void {
    this.menus = [
      { path: "/pages/cash-on-delivery", name: "CashOn Delivery" } as IMenu,
      { path: "/pages/card", name: "Card" } as IMenu,
      { path: "/pages/mobile-banking", name: "Mobile Banking" } as IMenu,
    ];
  }
}
