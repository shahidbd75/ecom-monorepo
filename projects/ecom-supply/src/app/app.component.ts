import { Component } from '@angular/core';
import { IMenu } from 'projects/lib-ui-shared/src/lib/features/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Supply Management';
  menus: IMenu[] = [];
  
  ngOnInit(): void {
    this.menus = [
      { path: "/supply/supplier", name: "Supplier" } as IMenu,
      { path: "/supply/distributor", name: "Distributor" } as IMenu
    ];
  }
}
