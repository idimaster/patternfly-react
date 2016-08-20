export interface DropDownItem {
    name: string;
}

export interface StoreCallback {
    (): DropDownItem[];
}

export interface DropDownStore {
    getItems(): DropDownItem[];
}
