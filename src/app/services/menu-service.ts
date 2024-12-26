import { Observable, of } from "rxjs";
import { MenuItem } from "../models/menu-item";
import { Injectable } from "@angular/core";

@Injectable()
export class MenuService {
    private readonly _menuItems: MenuItem[] = [
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dotted line', route: 'dotted-line', icon: 'more_vert' },
        { label: 'CSS grid', route: 'grid', icon: 'grid_view' },
        { label: 'Custom properties', route: 'custom-properties', icon: 'tune' },
        { label: 'Html to Pdf', route: 'html-pdf', icon: 'folder_code' }
    ];

    initialize$(): Observable<MenuItem[]> {
        const items: MenuItem[] = this.sort();
        return of(items);
    }

    private sort(): MenuItem[] {
        const menuItems: MenuItem[] = [this._menuItems[0]];
        this._menuItems.sort((a, b) => {
            if (a.label < b.label) return -1;
            if (a.label > b.label) return 1;
            return 0;
        })
        menuItems.push(...this._menuItems.filter(f => f.label !== 'Home'));

        return menuItems;
    }
}