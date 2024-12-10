import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as navActions from 'src/app/state/navigation/navigation-actions';

@Component({
  selector: 'app-dotted-line',
  templateUrl: './dotted-line.component.html',
  styleUrls: ['./dotted-line.component.css',
    '../../../assets/layout.css',
    '../../../assets/theming.css']
})
export class DottedLineComponent implements OnInit {

  constructor(private readonly _navState: Store) { }

  ngOnInit(): void {
    this._navState.dispatch(navActions.NavigationActions.setTitle({ title: 'CSS Dotted Lines' }));
  }

  show(event: any, show: boolean) {

    let anchor, span, spanDisplay, anchorDisplay;
    if (show) {
      anchor = event.target;
      span = event.target.nextSibling;
      spanDisplay = 'inline';
      anchorDisplay = 'none';
    }
    else {
      anchor = event.target.parentNode.parentNode.children[0];
      span = event.target.parentNode;
      spanDisplay = 'none';
      anchorDisplay = 'inline';
    }

    span.style.display = spanDisplay;
    anchor.style.display = anchorDisplay;

    return false;
  }
}
