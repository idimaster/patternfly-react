import * as React from 'react'
import invariant from 'invariant';

import { Brand } from './Brand'
import { LeftPanel } from './LeftPanel'
import { RightPanel } from './RightPanel'
import {ReactElement} from "react";

interface PanelsDto {
    brand?: ReactElement<any>
    left?: ReactElement<any>
    right?: ReactElement<any>
}

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

    private findPanels(children: React.ReactNode): PanelsDto {
        let brand = null;
        let left = null;
        let right = null;
        React.Children.forEach(children, child => {
            if(React.isValidElement(child)) {
                switch (child.type) {
                    case Brand:
                        invariant(brand != null, 'Only one Brand element allowed.');
                        brand = child;
                        break;
                    case LeftPanel:
                        invariant(left != null, 'Only one LeftPanel element allowed.');
                        left = child;
                        break;
                    case RightPanel:
                        invariant(right != null, 'Only one RightPanel element allowed.');
                        right = child;
                        break;
                    default:
                        invariant(true, 'Only Brand, LeftPanel and RightPanel elements allowed as child for VNavbar')
                }
            }
        });

        return {brand, left, right}
    }

    render(): React.ReactElement<any> {
        const panels = this.findPanels(this.props.children);
        return (
            <nav className="navbar navbar-pf-vertical">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    {panels.brand}
                </div>
                <nav className="collapse navbar-collapse">
                    {panels.left}
                    {panels.right}
                </nav>
            </nav>)
    }
}
