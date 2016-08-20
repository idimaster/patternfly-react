import * as React from 'react'

import { NavItem } from '../items'
import { Brand } from  '../Brand'

export interface NavbarStore {
    getBrand?(): Brand;
    getLeftPanelElements?(): NavItem<any>[];
    getRightPanelElements?(): NavItem<any>[];
}