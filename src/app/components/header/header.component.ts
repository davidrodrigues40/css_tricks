import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/models/menu-item';
import { MenuService } from 'src/app/services/menu-service';
import { getTitle } from 'src/app/state/navigation/navigation-selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [
    MenuService
  ]
})
export class HeaderComponent {
  constructor(private readonly _store: Store) { }

  title$: Observable<string> = this._store.select(getTitle);
}
