import { createActionGroup, props } from "@ngrx/store";

export const NavigationActions = createActionGroup({
    source: 'NAVIGATION',
    events: {
        'Set Title': props<{ title: string }>()
    }
});