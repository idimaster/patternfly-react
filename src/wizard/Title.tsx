import * as React from 'react'

import {CommandPayload, OnSelectCallback} from '../events';

export class Title extends React.Component<{active?: boolean, number?: string, title:string, onSelect?: OnSelectCallback, payload?: CommandPayload}, any> {
    static propTypes() {
        return {
            active: React.PropTypes.bool,
            number: React.PropTypes.string,
            title: React.PropTypes.string,
            onSelect: React.PropTypes.func,
            payload: React.PropTypes.object
        }
    }
    
    private handleSelect = () => {
        if (this.props.onSelect) {
            this.props.onSelect(this.props.payload);
        }
    };
    
    render(): React.ReactElement<any> {
        var style = this.props.active ? "active" : "";
        return <li className={style}>
            <a onClick={this.handleSelect}><span className="wizard-pf-step-number">{this.props.number}</span><span className="wizard-pf-step-title">{this.props.title}</span></a>
        </li>
    }
}