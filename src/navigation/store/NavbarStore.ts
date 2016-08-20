import * as React from 'react';

export interface NavbarStore {
    getBrand?(): React.ReactElement<any>;
    getLeftPanelElements?(): React.ReactElement<any>[];
    getRightPanelElements?(): React.ReactElement<any>[];
}