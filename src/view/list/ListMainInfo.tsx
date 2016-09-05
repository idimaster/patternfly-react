import * as React from 'react'
const invariant = require('invariant');

import {ListMainInfoLeft} from "./ListMainInfoLeft";
import {ListMainInfoDescription} from "./ListMainInfoDescription";

interface ItemsDto {
    left?: React.ReactElement<any>
    description?: React.ReactElement<any>
}

export class ListMainInfo extends React.Component<any, any> {
    static get Left(): typeof ListMainInfoLeft {
        return ListMainInfoLeft;
    }

    static get Description(): typeof ListMainInfoDescription {
        return ListMainInfoDescription;
    }

    private findItems(children: React.ReactNode): ItemsDto {
        let left = null;
        let description = null;
        React.Children.forEach(children, child => {
            if(React.isValidElement(child)) {
                switch (child.type) {
                    case ListMainInfoLeft:
                        invariant(left == null, 'Only one Left element allowed.');
                        left = child;
                        break;
                    case ListMainInfoDescription:
                        invariant(description == null, 'Only one Description element allowed.');
                        description = child;
                        break;
                    default:
                        invariant(false, 'Only Brand, LeftPanel and RightPanel elements allowed as child for ListMainInfo')
                }
            }
        });
        return {left, description}
    }

    render(): React.ReactElement<any> {
        const items = this.findItems(this.props.children);
        return <div className="list-view-pf-main-info">
            {items.left}
            <div className="list-view-pf-body">
                {items.description}
                <div className="list-view-pf-additional-info">
                    <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-screen"></span>
                        <strong>8</strong> Hosts
                    </div>
                    <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-cluster"></span>
                        <strong>8</strong> Clusters
                    </div>
                    <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-container-node"></span>
                        <strong>18</strong> Nodes
                    </div>
                    <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-image"></span>
                        <strong>4</strong> Images
                    </div>
                </div>
            </div>
        </div>
    }
}