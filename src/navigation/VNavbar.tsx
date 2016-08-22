import * as React from 'react'

import { Brand } from './Brand'
import { LeftPanel } from './LeftPanel'
import { RightPanel } from './RightPanel'

export class VNavbar extends React.Component<any, any> {

    static get Brand(): typeof Brand {
        return Brand;
    }

    static get RightPanel(): typeof RightPanel {
        return RightPanel;
    }

    static get LeftPanel(): typeof LeftPanel {
        return LeftPanel;
    }

    render(): React.ReactElement<any> {
        const children = React.Children.toArray(this.props.children);
        //TODO: find correct children
        const brand = children[0];
        const left = children[1];
        const right = children[2];
        return (
            <nav className="navbar navbar-pf-vertical">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    {brand}
                </div>
                <nav className="collapse navbar-collapse">
                    {left}
                    {right}
                </nav>
            </nav>)
    }
}
