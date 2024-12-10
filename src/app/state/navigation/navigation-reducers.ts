import { Action, createReducer, on } from "@ngrx/store";
import * as actions from './navigation-actions';
import { NavigationState } from "./navigation-state";

const navigationState: NavigationState = {
    title: ''
};

const _navigationReducer = createReducer(
    navigationState,
    on(actions.NavigationActions.setTitle, (_state, { title }) => ({ ..._state, title }))
);

export function navigationReducer(state: any, action: Action) {
    return _navigationReducer(state, action);
}