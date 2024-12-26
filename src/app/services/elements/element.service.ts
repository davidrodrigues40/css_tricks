import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataAsset, DataAssetType } from 'src/app/models/data-asset';
import { DataAssetMenuGroup } from 'src/app/models/data-asset-menu-item';
import { DataElement } from 'src/app/models/data-element';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  getDataAssets$(): Observable<DataAsset[]> {
    return of(this.allAssets);
  }

  getMenu$(): Observable<DataAssetMenuGroup[]> {
    const menuItems: DataAssetMenuGroup[] = [];
    this.allAssets.forEach(asset => {
      const elements: DataElement[] = Array.isArray(asset.elements[0]) ? asset.elements[0] : asset.elements as DataElement[];
      const menuGroup: DataAssetMenuGroup = { title: asset.title, items: [], visible: asset.visible };

      elements.forEach(element => {
        menuGroup.items.push({ value: element.label, visible: element.visible });
      });

      menuItems.push(menuGroup);
    });

    return of(menuItems);
  }

  private readonly personalInformation: DataAsset = {
    visible: true,
    title: 'Personal Information',
    className: 'column-100',
    columns: 3,
    order: 1,
    dataAssetType: DataAssetType.Single,
    elements:
      [
        this.createElement('Name', 'Doe, Johnathan P.', 1),
        this.createElement('DOR', '1 Jan 2018', 2, false),
        this.createElement('Projected Grade', 'N/A', 3),
        this.createElement('DoD ID', '1234567890', 4),
        this.createElement('DAFSC', '12M3D', 5),
        this.createElement('Duty Title', 'Ops', 6),
        this.createElement('PAS', 'ZF1LFH4u', 7),
        this.createElement('PSN', '219996642', 8),
        this.createElement('Base', 'Scott', 9),
        this.createElement('Command', 'AMC', 10),
        this.createElement('Dependents', '2', 11),
        this.createElement('Sex/Race/Ethic', 'M / Black / African American', 12),
        this.createElement('Functional Category', 'Permanent Party', 13),
        this.createElement('Record Status', '10', 14),
        this.createElement('Source of Commission', 'U.S.A.F. ACADEMY', 15),
      ]
  };

  private readonly dutyStatus: DataAsset = {
    visible: true,
    title: 'Duty Status',
    className: 'column-50',
    columns: 1,
    order: 2,
    dataAssetType: DataAssetType.Single,
    elements: [
      this.createElement('Duty Status', '00-Present for Duty', 1),
      this.createElement('Start Date', '01 Aug 2022', 2),
      this.createElement('End Date', '31 Dec 2023', 3),
      this.createElement('Projected Duty Status', '20-TDY Contingency', 4),
      this.createElement('Projected Start Date', '01 Jan 2025', 5),
      this.createElement('Projected End Date', '31 Dec 2027', 6),
    ]
  };

  private readonly serviceDates: DataAsset = {
    visible: true,
    title: 'Service Dates',
    className: 'column-50',
    columns: 2,
    order: 3,
    dataAssetType: DataAssetType.Single,
    elements: [
      this.createElement('DAS', '01 Aug 2024', 1),
      this.createElement('DOS', '01 Jan 2022', 2),
      this.createElement('RSSP', 'VOL RETMNT REGAF OFF', 3),
      this.createElement('DEROS', '01 Aug 2024', 4),
      this.createElement('ADSC Date', '01 Aug 2024', 5),
      this.createElement('ADSC Reason', 'A', 6),
      this.createElement('TAFMSD', '01 Aug 2012', 7),
      this.createElement('ODSD', '01 Aug 2012', 8),
      this.createElement('EAD', '01 Aug 2013', 9),
      this.createElement('Pay Date', '01 Mar 2014', 10),
      this.createElement('STRD(#)', '01 Mar 2020(3)', 11),
      this.createElement('RegAF Date', '01 Mar 2021', 12),
      this.createElement('TFCSD', '01 Mar 2022', 13),
      this.createElement('TYSD/PLSD', '01 Mar 2023', 14),
      this.createElement('1405 Date', '01 Mar 2024', 15),
    ]
  };

  private readonly militaryJoinSpouseConsideration: DataAsset = {
    visible: true,
    title: 'Military Join Spouse Consideration',
    className: 'column-50',
    columns: 1,
    order: 4,
    dataAssetType: DataAssetType.Single,
    elements: [
      this.createElement('Spouse Intent', 'A - Any Conus or Oversea Assignment (Inc Concurrent Short Tours', 1),
      this.createElement('Spouse SSAN', '1234', 2),
    ]
  };

  private readonly overseasHistory: DataAsset = {
    visible: true,
    title: 'Overseas History',
    className: 'column-50',
    order: 5,
    dataAssetType: DataAssetType.List,
    elements: [
      [
        { label: 'Country', value: 'Germany', visible: true, order: 1 },
        { label: 'Start Date', value: '01 Aug 2018', visible: true, order: 2 },
        { label: 'End Date', value: '01 Jan 2019', visible: true, order: 3 }
      ],
      [
        { label: 'Country', value: 'Japan', visible: true, order: 1 },
        { label: 'Start Date', value: '01 Aug 2019', visible: true, order: 2 },
        { label: 'End Date', value: '01 Jan 2020', visible: true, order: 3 }
      ],
      [
        { label: 'Country', value: 'Korea', visible: true, order: 1 },
        { label: 'Start Date', value: '01 Aug 2020', visible: true, order: 2 },
        { label: 'End Date', value: '01 Jan 2021', visible: true, order: 3 }
      ]
    ]
  };

  private readonly allAssets: DataAsset[] = [
    this.personalInformation,
    this.dutyStatus,
    this.serviceDates,
    this.militaryJoinSpouseConsideration,
    this.overseasHistory
  ];

  private createElement(label: string, value: string, order: number, visible: boolean = true): DataElement {
    return { label, value, visible, order };
  }
}
