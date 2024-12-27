import { DataElement } from "./data-element";

export interface DataAsset {
    title: string;
    elements: DataElement[] | DataElement[][];
    visible: boolean;
    className: string;
    order: number;
    dataAssetType: DataAssetType;
    columns?: number;
}

export enum DataAssetType {
    NotSet = 0,
    Single = 1,
    List = 2
}