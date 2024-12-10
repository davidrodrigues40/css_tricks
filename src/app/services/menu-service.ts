import { MenuItem } from "../models/menu-item";

export class MenuService {
    private readonly _menuItems: MenuItem[] = [
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'DottedLine', route: 'dotted-line', icon: 'more_vert' },
        { label: 'CSS Grid', route: 'grid', icon: 'grid_view' }
    ];

    getMenuItems(): MenuItem[] {
        return this.sort();
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