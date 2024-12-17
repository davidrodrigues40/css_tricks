import { Component, Input } from '@angular/core';
import { CodeLine } from './models/code-line';

@Component({
  selector: 'app-code-template',
  templateUrl: './code-template.component.html',
  styleUrls: ['./code-template.component.css',
    '../../../assets/layout.css',
    '../../../assets/theming.css'
  ]
})
export class CodeTemplateComponent {
  @Input() lines: Array<CodeLine> = [];
  @Input() codeType: string = 'CSS';

  indentSize: number = 6;
  indentChar: string = '&nbsp;';

  getIndent(line: CodeLine): string {
    let indentSpaces = '';

    for (let x = 0; x < line.indentLevel; x++) {
      indentSpaces += this.indentChar.repeat(this.indentSize);
    }

    return indentSpaces;
  }

  getValueClass(lineValue: string): string {
    if (isNaN(+lineValue))
      return 'value-text';

    return 'value-number';
  }

  getPropertyClass(indentLevel: number): string {
    if (indentLevel == 1)
      return 'property';

    return 'property-indent';
  }

  getValue(): string {
    const div: HTMLElement | null = document.getElementById('code-div');

    return div ? div.innerText : '';
  }
}
