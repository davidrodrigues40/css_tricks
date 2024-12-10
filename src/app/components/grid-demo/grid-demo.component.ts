import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavigationActions } from 'src/app/state/navigation/navigation-actions';

@Component({
  selector: 'app-grid-demo',
  templateUrl: './grid-demo.component.html',
  styleUrls: ['./grid-demo.component.css',
    '../../../assets/layout.css',
    '../../../assets/theming.css']
})
export class GridDemoComponent {
  constructor(private readonly _state: Store) { }

  ngOnInit(): void {
    this._state.dispatch(NavigationActions.setTitle({ title: 'CSS Grid' }));
  }
}
