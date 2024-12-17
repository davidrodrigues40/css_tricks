import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'src/app/models/menu-item';
import { NavigationActions } from 'src/app/state/navigation/navigation-actions';
import * as fromMenu from 'src/app/state/menu/menu-selectors';
import { MenuActions } from 'src/app/state/menu/menu-actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(
    private readonly _store: Store) { }

  menuItems$: Observable<ReadonlyArray<MenuItem>> = this._store.select(fromMenu.getMenu);

  ngOnInit(): void {
    this._store.dispatch(MenuActions.initialize());
  }

  menuItemClicked(item: MenuItem): void {
    this._store.dispatch(NavigationActions.navigate({ parts: [item.route] }))
  }
}
