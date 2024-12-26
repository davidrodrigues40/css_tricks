import { DataAssetState } from "./data-asset/data-asset.state";
import { MenuState } from "./menu/menu-state";
import { NavigationState } from "./navigation/navigation-state";

export interface AppState {
    menu: MenuState;
    navigation: NavigationState,
    dataAsset: DataAssetState
}