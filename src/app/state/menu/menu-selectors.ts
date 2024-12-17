import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MenuState } from "./menu-state";

const menuState = createFeatureSelector<Readonly<MenuState>>('menu');

export const getMenu = createSelector(
    menuState,
    (state: MenuState) => state.items
);