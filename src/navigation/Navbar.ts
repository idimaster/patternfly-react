/**
 * Created by Dmitry<dizumskiy@eisgroup.com> on 8/14/16.
 */

import * as React from 'react';

export interface Navbar {
    getBrand?(): React.ReactElement<any>;
    getLeft?(): React.ReactElement<any>[];
    getRight?(): React.ReactElement<any>[];
}