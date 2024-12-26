import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { DataAsset } from "src/app/models/data-asset";
import { DataAssetMenuGroup } from "src/app/models/data-asset-menu-item";

export const DataAssetActions = createActionGroup({
    source: 'DATA-ASSETS',
    events: {
        'Get Data Assets': emptyProps(),
        'Get Data Assets Success': props<{ items: DataAsset[] }>(),
        'Update Data Asset': props<{ dataAsset: DataAsset, checked: boolean, index?: number }>(),
        'Get Data Asset Menu': emptyProps(),
        'Get Data Asset Menu Success': props<{ items: DataAssetMenuGroup[] }>()
    }
});