import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { NavigationService } from "src/app/services/navigation-service";
import { NavigationActions } from "./navigation-actions";
import { map, mergeMap } from "rxjs";

@Injectable()
export class NavigationEffects {
    constructor(private readonly _actions$: Actions, private readonly _navigationService: NavigationService) { }

    navigate = createEffect(() => this._actions$.pipe(
        ofType(NavigationActions.navigate),
        mergeMap(action => this._navigationService.navigate$(action.parts)
            .pipe(
                map(response => NavigationActions.navigateSuccess({ results: response }))
            )
        )));
}