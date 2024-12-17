import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavigationActions } from 'src/app/state/navigation/navigation-actions';
import { CodeLine } from '../code-template/models/code-line';

@Component({
  selector: 'app-grid-demo',
  templateUrl: './grid-demo.component.html',
  styleUrls: ['./grid-demo.component.css',
    '../../../assets/layout.css',
    '../../../assets/theming.css']
})
export class GridDemoComponent {
  constructor(private readonly _state: Store) { }

  private readonly _tab: string = '&nbsp;&nbsp;&nbsp;';
  private readonly _return: string = '<br>';

  ngOnInit(): void {
    this._state.dispatch(NavigationActions.setTitle({ title: 'CSS Grid' }));
  }

  readonly mainGridLines: CodeLine[] = [
    this.addKeywordRow(0, '.main-layout', ' {'),
    this.addPropertyRow(1, 'display', 'grid', ';', ':'),
    this.addPropertyRow(1, 'min-height', '100vh', ';', ':'),
    this.addPropertyRow(1, 'min-height', '100dvh', ';', ':'),
    this.addPropertyRow(1, 'grid-template-rows', undefined, ':'),
    this.addPropertyRow(2, '[header]', '64px'),
    this.addPropertyRow(2, '[content]', '1fr'),
    this.addPropertyRow(2, '[footer]', '40px'),
    this.addTextRow(0, '}')
  ];

  readonly contentGridLines: CodeLine[] = [
    this.addKeywordRow(0, '.content-grid', ' {'),
    this.addPropertyRow(1, 'display', 'grid', ';', ':'),
    this.addPropertyRow(1, 'margin-top', '16px', ';', ':'),
    this.addPropertyRow(1, 'row-gap', '16px', ';', ':'),
    this.addPropertyRow(1, 'grid-template-columns', undefined, ':'),
    this.addPropertyRow(2, '[full-width-start]', '50px'),
    this.addPropertyRow(2, '[breakout-start]', '50px'),
    this.addPropertyRow(2, '[content-start]', '1fr', ' [content-end]'),
    this.addValueRow(2, '50px', '[breakout-end]'),
    this.addValueRow(2, '50px', '[full-width-end];'),
    this.addTextRow(0, '}')
  ];

  private addKeywordRow(indentLevel: number,
    keyword?: string,
    additionalKeywordText?: string,
    property?: string,
    additionalPropertyText?: string,
    value?: string,
    additionalValueText?: string): CodeLine {

    return { keyword, additionalKeywordText, property, additionalPropertyText, value, additionalValueText, indentLevel };
  }

  private addPropertyRow(indentLevel: number,
    property?: string,
    value?: string,
    additionalValueText?: string,
    propertySeparator?: string,
    additionalPropertyText?: string): CodeLine {
    return { property, value, additionalValueText, additionalPropertyText, propertySeparator, indentLevel };
  }

  private addValueRow(indentLevel: number,
    value?: string, additionalValueText?: string) {
    return { indentLevel, value, additionalValueText };
  }

  private addTextRow(indentLevel: number, additionalKeywordText?: string): CodeLine {
    return { additionalKeywordText, indentLevel }
  }
}
