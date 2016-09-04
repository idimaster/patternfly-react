import * as React from 'react'

import {OnActionCallback, ActionPayload} from "../../events";

export interface ListActionItemProps {
    label: string
    onAction?: OnActionCallback
    payload?: ActionPayload
}

export class ListActionItem extends React.Component<ListActionItemProps, any> {
    static propTypes() {
        return {
            label: React.PropTypes.string.isRequired,
            onAction: React.PropTypes.func,
            payload: React.PropTypes.object
        }
    }

    private handleAction = () => {
        if (this.props.onAction) {
            this.props.onAction(this.props.payload);
        }
    };

    render(): React.ReactElement<any> {
        return <li><a onClick={this.handleAction}>{this.props.label}</a></li>
    }
}