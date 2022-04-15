import { Component, Input, OnInit } from '@angular/core';
import { IMenu } from './menu';

@Component({
  selector: 'lib-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  _menus: IMenu[] = [];

  @Input()
  set menus(menu: IMenu[]) {
    this._menus = menu;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
