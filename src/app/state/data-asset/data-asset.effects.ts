import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ElementService } from "src/app/services/elements/element.service";
import { DataAssetActions } from "./data-asset.actions";
import { Injectable } from "@angular/core";
import { mergeMap, map } from "rxjs";

@Injectable()
export class DataAssetEffects {
    constructor(private readonly _actions$: Actions, private readonly _service: ElementService) { }

    getDataAssets$ = createEffect(() => this._actions$.pipe(
        ofType(DataAssetActions.getDataAssets),
        mergeMap(_ => this._service.getDataAssets$().pipe(
            map(items => DataAssetActions.getDataAssetsSuccess({ items: items })))
        )));

    getDataAssetMenu$ = createEffect(() => this._actions$.pipe(
        ofType(DataAssetActions.getDataAssetMenu),
        mergeMap(_ => this._service.getMenu$().pipe(
            map(items => DataAssetActions.getDataAssetMenuSuccess({ items: items })))
        )));
}