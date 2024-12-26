import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
