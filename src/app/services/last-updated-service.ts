import { Injectable } from "@angular/core";

@Injectable()
export class LastUpdatedService {
    private readonly _lastUpdatedDate: Date = new Date(2024, 11, 10);

    LastUpdatedOn: string = this._lastUpdatedDate.toLocaleDateString();
}