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
    Single = 'Single',
    List = 'List'
}