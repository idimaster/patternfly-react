import * as React from 'react';

import { SidebarElement } from '../items/SidebarItem'

export interface SidebarStore {
    getItems?(): SidebarElement[];
}
