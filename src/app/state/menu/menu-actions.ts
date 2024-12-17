import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { MenuItem } from "src/app/models/menu-item";

export const MenuActions = createActionGroup({
    source: 'NAVIGATION',
    events: {
        'Initialize': emptyProps(),
        'Initialize Success': props<{ items: MenuItem[] }>()
    }
});