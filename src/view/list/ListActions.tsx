import * as React from 'react'
import * as uuid from 'node-uuid'

import {ListActionItem} from './ListActionItem';

export class ListActions extends React.Component<any, any> {

    static get ListActionItem(): typeof ListActionItem {
        return ListActionItem;
    }

    private id: string;

    componentWillMount() {
        this.id = uuid.v4();
    }

    render(): React.ReactElement<any> {
        const allChildren = React.Children.toArray(this.props.children);
        const menuAction = [];
        const actions = [];
        allChildren.forEach(child => {
            if (React.isValidElement(child)) {
                if (child .type === ListActionItem) {
                    menuAction.push(child);
                } else {
                    actions.push(child);
                }
            }
        });
        return <div className="list-view-pf-actions">
            {actions}
            <div className="dropdown pull-right dropdown-kebab-pf">
                <button className="btn btn-link dropdown-toggle" type="button" id={this.id}
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                </button>
                <ul className="dropdown-menu dropdown-menu-right" aria-labelledby={this.id}>
                    {menuAction}
                </ul>
            </div>
        </div>
    }
}