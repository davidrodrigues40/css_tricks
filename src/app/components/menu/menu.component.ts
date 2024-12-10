import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/models/menu-item';
import { MenuService } from 'src/app/services/menu-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(
    private readonly _router: Router,
    private readonly _menuService: MenuService) { }

  menuItems: ReadonlyArray<MenuItem> = this._menuService.getMenuItems();

  menuItemClicked(item: MenuItem): void {
    this._router.navigate([item.route]);
  }
}
