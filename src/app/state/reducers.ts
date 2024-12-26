import { ActionReducerMap } from '@ngrx/store';
import * as fromMenu from 'src/app/state/menu/menu-reducers';
import * as fromNavigation from 'src/app/state/navigation/navigation-reducers';
import * as fromDataAsset from 'src/app/state/data-asset/data-asset.reducers';
import { AppState } from './app-state';

export const reducers: ActionReducerMap<AppState> = {
    menu: fromMenu.menuReducer,
    navigation: fromNavigation.navigationReducer,
    dataAsset: fromDataAsset.dataAssetReducer
}
