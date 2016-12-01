import * as React from 'react'

import {ActionPayload, OnActionCallback} from '../../events';

export class ListItemExpanded extends React.Component<{details?: React.ReactElement<any>, onClose?: OnActionCallback, payload?: ActionPayload}, any> {
    static propTypes() {
        return {
            details: React.PropTypes.object,
            onClose: React.PropTypes.func,
            payload: React.PropTypes.object
        }
    }
    
    private handleClose = () => {
        if (this.props.onClose) {
            this.props.onClose(this.props.payload);
        }
    }

    render(): React.ReactElement<any> {
        return <div className="list-group-item list-view-pf-expand-active">
            <div className="list-group-item-header">
                {this.props.children}
            </div>
            <div className="list-group-item-container container-fluid">
                <div className="close" onClick={this.handleClose}>
                    <span className="pficon pficon-close"></span>
                </div>
                {this.props.details}
            </div>
        </div>
    }
}