import * as React from 'react'
const invariant = require('invariant');

import {ListMainInfoLeft} from "./ListMainInfoLeft";
import {ListMainInfoDescription} from "./ListMainInfoDescription";
import {ListAdditionalInfo} from "./ListAdditionalInfo";
import {ListAdditionalInfoStacked} from "./ListAdditionalInfoStacked";

interface ItemsDto {
    left?: React.ReactElement<any>
    description?: React.ReactElement<any>
    additional: React.ReactElement<any>[]
}

export class ListMainInfo extends React.Component<any, any> {
    static get Left(): typeof ListMainInfoLeft {
        return ListMainInfoLeft;
    }

    static get Description(): typeof ListMainInfoDescription {
        return ListMainInfoDescription;
    }

    static get Additional(): typeof ListAdditionalInfo {
        return ListAdditionalInfo;
    }

    static get AdditionalStacked(): typeof ListAdditionalInfoStacked {
        return ListAdditionalInfoStacked;
    }

    private findItems(children: React.ReactNode): ItemsDto {
        let left = null;
        let description = null;
        let additional = [];
        const allChildren = React.Children.toArray(children);
        allChildren.forEach(child => {
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
                    case ListAdditionalInfo:
                        additional.push(child);
                        break;
                    case ListAdditionalInfoStacked:
                        additional.push(child);
                        break;
                    default:
                        invariant(false, 'Only Left, Description and Additional elements allowed as child for ListMainInfo')
                }
            }
        });
        return {left, description, additional}
    }

    render(): React.ReactElement<any> {
        const items = this.findItems(this.props.children);
        return <div className="list-view-pf-main-info">
            {items.left}
            <div className="list-view-pf-body">
                {items.description}
                <div className="list-view-pf-additional-info">
                    {items.additional}
                </div>
            </div>
        </div>
    }
}