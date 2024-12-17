import { Action, createReducer, on } from "@ngrx/store";
import * as fromActions from './menu-actions';
import { MenuState } from "./menu-state";

const initialMenuState: MenuState = {
    items: []
};

const _menuReducer = createReducer(
    initialMenuState,
    on(fromActions.MenuActions.initializeSuccess, (_state, { items }) => ({ ..._state, items }))
);

export function menuReducer(state: any, action: Action) {
    return _menuReducer(state, action);
}