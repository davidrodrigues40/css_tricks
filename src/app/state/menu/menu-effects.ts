import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MenuService } from "src/app/services/menu-service";
import { MenuActions } from "./menu-actions";
import { exhaustMap, map } from "rxjs";

@Injectable()
export class MenuEffects {
    constructor(private readonly _actions$: Actions, private readonly _menuService: MenuService) { }

    initialize$ = createEffect(() => this._actions$.pipe(
        ofType(MenuActions.initialize),
        exhaustMap(_ => this._menuService.initialize$()
            .pipe(
                map(items => MenuActions.initializeSuccess({ items: items }))
            )
        )));
}