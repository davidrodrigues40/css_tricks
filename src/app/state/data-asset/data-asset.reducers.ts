import { Action, createReducer, on } from "@ngrx/store";
import { DataAssetActions } from "./data-asset.actions";
import { DataAssetState } from "./data-asset.state";
import { DataElement } from "src/app/models/data-element";
import { DataAsset } from "src/app/models/data-asset";

const initialDataAssetMenuState: DataAssetState = {
    dataAssets: [],
    dataAssetMenu: []
};

const _dataAssetReducer = createReducer(
    initialDataAssetMenuState,
    on(DataAssetActions.getDataAssetsSuccess, (_state, { items }) => ({ ..._state, dataAssets: items })),
    on(DataAssetActions.updateDataAsset, (_state, { dataAsset, checked, index }) => {
        const dataAssets: DataAsset[] = [..._state.dataAssets];
        const asset: DataAsset = JSON.parse(JSON.stringify(dataAsset));
        const assetIndex: number = dataAssets.findIndex(a => a.title === dataAsset.title);
        let elements: DataElement[] | DataElement[][] = [];

        if (index === undefined) {
            asset.visible = checked;
            if (Array.isArray(asset.elements[0])) {
                elements = asset.elements as DataElement[][];
                elements.forEach(eList => {
                    eList.forEach(e => e.visible = checked);
                });
            }
            else {
                elements = asset.elements as DataElement[];
                elements.forEach(e => e.visible = checked);
            }
        }
        else if (index !== undefined && Array.isArray(asset.elements[0])) {
            elements = asset.elements as DataElement[][];
            elements.forEach(eList => {
                eList[index].visible = checked;
            });

            asset.visible = elements[0].some(e => e.visible);
        }
        else if (index !== undefined) {
            elements = asset.elements as DataElement[];
            elements[index].visible = checked;

            asset.visible = elements.some(e => e.visible);
        }

        asset.elements = elements;
        dataAssets.splice(assetIndex, 1, asset);

        return ({ ..._state, dataAssets: dataAssets });
    }),
    on(DataAssetActions.getDataAssetMenuSuccess, (_state, { items }) => ({ ..._state, dataAssetMenu: items }))
);

export function dataAssetReducer(state: any, action: Action) {
    return _dataAssetReducer(state, action);
}