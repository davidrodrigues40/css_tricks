import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";

@Injectable()
export class NavigationService {
    constructor(private readonly _router: Router) { }

    navigate$(parts: string[]): Observable<boolean> {
        return from(this._router.navigate(parts));
    }
}