import * as React from 'react'

import {CommandPayload, OnSelectCallback} from '../../events';

export class ListExpand extends React.Component<{expand: boolean, onClick?: OnSelectCallback, payload?: CommandPayload}, any> {
    static propTypes() {
        return {
            expand: React.PropTypes.bool,
            onClick: React.PropTypes.func,
            payload: React.PropTypes.object
        }
    }
    
    private handleClick = () => {
        if (this.props.onClick) {
            this.props.onClick(this.props.payload);
        }
    }
    
    render(): React.ReactElement<any> {
        let style = this.props.expand ? "fa fa-angle-down" : "fa fa-angle-right"
        return <div className="list-view-pf-expand" onClick={this.handleClick}>
            <span className={style}></span>
        </div>
    }
}