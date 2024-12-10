import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavigationActions } from 'src/app/state/navigation/navigation-actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
    '../../../assets/layout.css',
    '../../../assets/theming.css']
})
export class HomeComponent implements OnInit {
  constructor(private readonly _state: Store) { }

  ngOnInit(): void {
    this._state.dispatch(NavigationActions.setTitle({ title: 'CSS Tips and Tricks' }));
  }
}
