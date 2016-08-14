/**
 * Created by Dmitry<dizumskiy@eisgroup.com> on 8/14/16.
 */

import * as React from 'react';

export interface Navbar {
    getBrand(): React.ReactElement<any>;
    getLeft(): React.ReactElement<any>[];
    getRight(): React.ReactElement<any>[];
}

export class DefaultNavbar extends React.Component<any, any> implements Navbar {
    getBrand(): React.ReactElement<any> {
        throw new TypeError('It must be implemented');
    }

    getLeft(): React.ReactElement<any>[] {
        throw new TypeError('It must be implemented');
    }

    getRight(): React.ReactElement<any>[] {
        throw new TypeError('It must be implemented');
    }
}

