import { Component } from '@angular/core';
import { IMenu } from 'projects/lib-ui-shared/src/lib/features/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'User Management';
  menus: IMenu[] = [];
  
  ngOnInit(): void {
    this.menus = [
      { path: "/pages/user", name: "User Info" } as IMenu,
      { path: "/pages/role", name: "User Role" } as IMenu
    ];
  }
}
