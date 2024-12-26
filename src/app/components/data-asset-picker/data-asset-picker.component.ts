import { Component, OnInit } from '@angular/core';
import { DataAsset } from 'src/app/models/data-asset';
import { first } from 'rxjs';
import { Store } from '@ngrx/store';
import * as selectors from 'src/app/state/data-asset/data-asset.selectors';
import { DataAssetActions } from 'src/app/state/data-asset/data-asset.actions';
import { DataAssetMenuGroup } from 'src/app/models/data-asset-menu-item';

@Component({
  selector: 'app-data-asset-picker',
  templateUrl: './data-asset-picker.component.html',
  styleUrls: ['./data-asset-picker.component.css']
})
export class DataAssetPickerComponent implements OnInit {
  constructor(private readonly _store: Store) { }

  dataAssets: DataAsset[] = [];
  menu: DataAssetMenuGroup[] = [];

  ngOnInit(): void {

    this._store.dispatch(DataAssetActions.getDataAssetMenu());

    this._store.select(selectors.dataAssets)
      .subscribe(dataAssets => this.dataAssets = dataAssets);

    this._store.select(selectors.dataAssetMenu)
      .pipe(first())
      .subscribe(response => this.menu = JSON.parse(JSON.stringify(response)));
  }

  partiallyComplete(menuGroup: DataAssetMenuGroup): boolean {
    return menuGroup.items.some(e => e.visible) && !menuGroup.items.every(e => e.visible);
  }

  allChecked(dataAsset: DataAssetMenuGroup) {
    return dataAsset.items.every(e => e.visible);
  }

  updateMenu(menuGroup: DataAssetMenuGroup, checked: boolean, index?: number) {
    if (index !== undefined) menuGroup.items[index].visible = checked
    else {
      menuGroup.visible = checked;
      menuGroup.items.forEach(e => e.visible = checked);
    };

    const asset = this.dataAssets.find(a => a.title === menuGroup.title)!;

    this._store.dispatch(DataAssetActions.updateDataAsset({ dataAsset: asset, checked, index }));
  }
}
