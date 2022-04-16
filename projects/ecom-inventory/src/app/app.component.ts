import { Component, OnInit } from '@angular/core';
import { IMenu } from 'projects/lib-ui-shared/src/lib/features/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Inventory Management';
  menus: IMenu[] = [];
  ngOnInit(): void {
    this.menus = [
      { path: "/pages/requisition", name: "Requisition" } as IMenu,
      { path: "/pages/store", name: "Store" } as IMenu,
    ];
  }
}
