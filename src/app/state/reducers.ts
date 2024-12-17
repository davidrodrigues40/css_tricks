import { ActionReducerMap } from '@ngrx/store';
import * as fromMenu from 'src/app/state/menu/menu-reducers';
import * as fromNavigation from 'src/app/state/navigation/navigation-reducers';
import { AppState } from './app-state';

export const reducers: ActionReducerMap<AppState> = {
    menu: fromMenu.menuReducer,
    navigation: fromNavigation.navigationReducer
}
