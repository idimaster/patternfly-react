import * as React from 'react';

export interface SidebarStore {
    getItems(): React.ReactElement<any>[];
}
