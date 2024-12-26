import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DataAssetState } from "./data-asset.state";

const dataAssetState = createFeatureSelector<Readonly<DataAssetState>>('dataAsset');

export const dataAssets = createSelector(
    dataAssetState,
    (state: DataAssetState) => state.dataAssets
);

export const dataAssetMenu = createSelector(
    dataAssetState,
    (state: DataAssetState) => state.dataAssetMenu
);