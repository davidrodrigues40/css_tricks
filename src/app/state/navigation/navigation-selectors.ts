import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NavigationState } from "./navigation-state";

export const navigationSelectors = createFeatureSelector<Readonly<NavigationState>>('navigationState');

export const getTitle = createSelector(
    navigationSelectors,
    (state: NavigationState) => state.title
);