import { Component, OnInit } from '@angular/core';
import { IMenu } from 'projects/lib-ui-shared/src/lib/features/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ecom-storefront';
  _menu: IMenu[] = [];

  ngOnInit(): void {
    this._menu=[
      {path:"pages/top-selling-products", name:"Top Selling"} as IMenu,
      {path:"pages/new-arrival", name:"New Arrival Product"} as IMenu,
      {path:"pages/beehive-green-happy", name:"Green-Happy"} as IMenu,
      {path:"pages/beehive-green-cry", name:"Green-Happy"} as IMenu,
      {path:"pages/beehive-blue-happy", name:"Blue-Happy"} as IMenu,
      {path:"pages/beehive-blue-shock", name:"Blue-Shock"} as IMenu,
    ];
  }
}
