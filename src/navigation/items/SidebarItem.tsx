import * as React from 'react'
import {CommandPayload, OnSelectCallback} from "../../events";

export class SidebarItem extends React.Component<{ active?: boolean, label: string, icon: string, onSelect?: OnSelectCallback, payload?: CommandPayload}, any> {
    static propTypes() {
        return {
            label: React.PropTypes.string.isRequired,
            icon: React.PropTypes.string.isRequired,
            route: React.PropTypes.string.isRequired,
            onSelect: React.PropTypes.func,
            payload: React.PropTypes.object,
            active: React.PropTypes.bool
        }
    }

    private handleSelect = () => {
        if (this.props.onSelect) {
            this.props.onSelect(this.props.payload);
        }
    };

    render(): React.ReactElement<any> {
        var style = 'list-group-item';
        if (this.props.active) style += ' active';
        return <li className={style}>
            <a onClick={this.handleSelect}>
                <span className={'fa ' + this.props.icon} data-toggle="tooltip" title={this.props.label}></span>
                <span className="list-group-item-value">{this.props.label}</span>
            </a>
        </li>
    }
}