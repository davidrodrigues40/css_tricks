import { DataAsset } from "src/app/models/data-asset";
import { DataAssetMenuGroup } from "src/app/models/data-asset-menu-item";

export interface DataAssetState {
    dataAssets: DataAsset[];
    dataAssetMenu: DataAssetMenuGroup[];
}
