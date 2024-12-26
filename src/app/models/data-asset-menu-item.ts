export interface DataAssetMenuGroup {
    title: string;
    items: DataAssetMenuItem[];
    visible: boolean;
}

export interface DataAssetMenuItem {
    value: string;
    visible: boolean;
}