import { Injectable } from '@angular/core';
import { PdfHtmlService } from '../pdf-html.service';
import { DataElement } from 'src/app/models/data-element';
import { DataAsset, DataAssetType } from 'src/app/models/data-asset';
import { Store } from '@ngrx/store';
import { DataAssetActions } from 'src/app/state/data-asset/data-asset.actions';
import * as DataAssetSelectors from 'src/app/state/data-asset/data-asset.selectors';

@Injectable()
export class TablePdfService implements PdfHtmlService {
  private _wrapper!: HTMLDivElement;

  constructor(private readonly _state: Store<DataAsset>) { }

  createPdf(container: HTMLElement): void {
    this._wrapper = document.createElement('div');

    this._wrapper.classList.add('pdf-page');
    container.append(this._wrapper);

    this._state.dispatch(DataAssetActions.getDataAssets());

    this._state.select(DataAssetSelectors.dataAssets)
      .subscribe(assets => {
        Array.from(this._wrapper.children).forEach(container => container.remove());
        const orderedAssets = this.toSorted(JSON.parse(JSON.stringify(assets)));

        orderedAssets.forEach(asset => {
          if (asset.dataAssetType === DataAssetType.Single) {
            this.addSingleDataAsset(asset);
          } else {
            this.createListDataAsset(asset);
          }
        });
      });
  }

  private toSorted(assets: DataAsset[]): DataAsset[] {
    return assets.sort((a, b) => {
      if (a.order < b.order) return -1;
      if (a.order > b.order) return 1;
      return 0;
    });
  }

  private addSectionTableHeader(table: HTMLTableElement, title: string): void {
    const head: HTMLTableSectionElement = document.createElement('thead');
    const row: HTMLTableRowElement = document.createElement('tr');
    const cell: HTMLTableCellElement = document.createElement('td');
    cell.innerText = title;

    cell.className = 'pdf-cell';
    row.className = 'heading';

    row.append(cell);
    head.append(row);

    table.prepend(head);
  }

  private createListTable(title: string, columns: string[]): HTMLTableElement {
    const table: HTMLTableElement = document.createElement('table');
    const head: HTMLTableSectionElement = document.createElement('thead');
    const row: HTMLTableRowElement = document.createElement('tr');

    columns.forEach(column => {
      const cell: HTMLTableCellElement = document.createElement('td');
      cell.innerText = column;

      cell.classList.add('pdf-cell');
      cell.classList.add('data-label');
      row.append(cell);
    });

    head.append(row);
    table.append(head);

    table.setAttribute('style', 'width: 100%');

    return table
  }

  private createTableRow(parent: HTMLTableElement, dataElements: DataElement[]): void {
    const row = document.createElement('tr');
    const elements: DataElement[] = JSON.parse(JSON.stringify(dataElements)) as DataElement[];
    elements.sort((a, b) => a.order - b.order);

    elements.forEach(element => {
      if (element.visible)
        row.append(this.createTableCell(element.value));
    });

    parent.append(row);
  }

  private createTableCell(value: string): HTMLTableCellElement {
    const cell: HTMLTableCellElement = document.createElement('td');
    cell.innerText = value;
    cell.classList.add('pdf-cell');
    cell.classList.add('data-element');

    return cell
  }

  private addSingleDataAsset(dataAsset: DataAsset): void {
    if (!dataAsset.visible) return;
    const columns = dataAsset.columns ?? 1;
    const className = dataAsset.className;
    const section: HTMLDivElement = document.createElement('div');
    const dataElements: DataElement[] = dataAsset.elements as DataElement[];
    const table: HTMLTableElement = this.createSectionTable(dataAsset.title);
    const cell: HTMLTableCellElement = table.rows[1].cells[0];
    const sections = this.createSubSections(columns);

    const elements: DataElement[] = dataElements.filter(f => f.visible);

    section.classList.add(className);
    table.setAttribute('style', 'width: 100%');
    cell.setAttribute('style', 'display: flex;');

    cell.append(sections.section1);

    if (sections.section2)
      cell.append(sections.section2);
    if (sections.section3)
      cell.append(sections.section3);

    section.append(table);

    this.addSingleDataAssetElements(sections, elements, columns);

    this._wrapper.append(section);
  }

  private addSingleDataAssetElements(sections: any, dataElements: DataElement[], columnCount: number): void {
    const elements = JSON.parse(JSON.stringify(dataElements)) as DataElement[];
    const columnItemCount = Math.round(elements.length / columnCount);
    let currentColumn = 1;

    elements.sort((a, b) => a.order - b.order);
    while (elements.length > 0) {
      let elems = elements.splice(0, columnItemCount);
      switch (currentColumn) {
        case 1:
          elems.forEach(element => {
            this.addElement(sections.section1, element);
          });
          currentColumn++;
          break;
        case 2:
          elems.forEach(element => {
            this.addElement(sections.section2, element);
          });
          currentColumn++;
          break;
        case 3:
          elems.forEach(element => {
            this.addElement(sections.section3, element);
          });
          currentColumn = 1;
          break;
        default:
          throw new Error('invalid section');
      }
    };
  }

  private createSectionTable(title: string): HTMLTableElement {
    const table: HTMLTableElement = document.createElement('table');
    const row: HTMLTableRowElement = document.createElement('tr');
    const cell: HTMLTableCellElement = document.createElement('td');

    table.setAttribute('style', 'width: 100%;');
    row.append(cell);
    table.append(row);

    this.addSectionTableHeader(table, title);
    return table;
  }

  private createSubSections(columns: number): { section1: HTMLDivElement, section2: HTMLDivElement | undefined, section3: HTMLDivElement | undefined } {
    const section1: HTMLDivElement = document.createElement('div');
    const section2: HTMLDivElement | undefined = columns > 1 ? document.createElement('div') : undefined;
    const section3: HTMLDivElement | undefined = columns > 2 ? document.createElement('div') : undefined;
    const flex_basis = this.getFlexBasis(columns);

    section1.classList.add('pdf-section');
    section2?.classList.add('pdf-section');
    section3?.classList.add('pdf-section');
    section1.setAttribute('style', flex_basis);
    section2?.setAttribute('style', flex_basis);
    section3?.setAttribute('style', flex_basis);

    return { section1, section2, section3 };
  }

  private addElement(section: HTMLDivElement, element: DataElement): void {
    const wrapper: HTMLDivElement = document.createElement('div');
    const label: HTMLDivElement = document.createElement('div');
    const value: HTMLDivElement = document.createElement('div');

    wrapper.setAttribute('style', 'display: flex;');
    label.classList.add('data-label');
    label.classList.add('pdf-cell');
    value.classList.add('data-element');
    value.classList.add('pdf-cell');
    label.setAttribute('style', 'flex-basis: 50%');
    value.setAttribute('style', 'flex-basis: 50%');

    label.innerText = element.label;
    value.innerText = element.value;

    wrapper.append(label);
    wrapper.append(value);

    section.append(wrapper);
  }

  private createListDataAsset(dataAsset: DataAsset): void {
    const className = dataAsset.className;
    const firstRowElements: DataElement[] = dataAsset.elements[0] as DataElement[];
    const section: HTMLDivElement = document.createElement('div');
    const sectionTable: HTMLTableElement = this.createSectionTable(dataAsset.title);
    const table: HTMLTableElement = this.createListTable(dataAsset.title, firstRowElements.filter(f => f.visible).sort((a, b) => a.order - b.order).map(e => e.label));

    sectionTable.rows[1].cells[0].append(table);
    section.append(sectionTable);

    section.classList.add(className);

    dataAsset.elements.forEach(element => {
      this.createTableRow(table, element as DataElement[]);
    });

    this._wrapper.append(section);
  }

  private getFlexBasis(columns: number): string {
    switch (columns) {
      case 1:
        return 'flex-basis: 100%;';
      case 2:
        return 'flex-basis: 50%;';
      case 3:
        return 'flex-basis: 33%;';
      default:
        return 'flex-basis: 100%';
    }
  }
}
