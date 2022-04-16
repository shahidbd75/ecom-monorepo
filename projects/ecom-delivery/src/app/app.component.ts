import { Component, OnInit } from '@angular/core';
import { IMenu } from 'projects/lib-ui-shared/src/lib/features/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Delivery';

  menus: IMenu[] = [];

  ngOnInit(): void {
    this.menus = [
      { path: "/pages/delivery-status", name: "Delivery Status" } as IMenu,
      { path: "/pages/delivery-tracking", name: "Delivery Tracking" } as IMenu,
    ]
  }
}
