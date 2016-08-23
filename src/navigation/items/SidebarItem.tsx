import * as React from 'react'
import {CommandPayload, OnSelectCallback} from "./OnSelectCallback";

export class SidebarItem extends React.Component<{ label: string, icon: string, onSelect?: OnSelectCallback, payload?: CommandPayload}, any> {
    static propTypes() {
        return {
            label: React.PropTypes.string.isRequired,
            icon: React.PropTypes.string.isRequired,
            route: React.PropTypes.string.isRequired
        }
    }

    private handleSelect = () => {
        if (this.props.onSelect) {
            this.props.onSelect(this.props.payload);
        }
    };

    render(): React.ReactElement<any> {
        return <li className="list-group-item">
            <a onClick={this.handleSelect}>
                <span className={'fa ' + this.props.icon} data-toggle="tooltip" title={this.props.label}></span>
                <span className="list-group-item-value">{this.props.label}</span>
            </a>
        </li>
    }
}