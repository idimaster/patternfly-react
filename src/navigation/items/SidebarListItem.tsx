import * as React from 'react'
import {OnSelectCallback, CommandPayload} from "../../events";

export class SidebarListItem extends React.Component<{label: string, onSelect?: OnSelectCallback, payload?: CommandPayload }, any> {
    static propTypes() {
        return {
            label: React.PropTypes.string.isRequired,
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
                <span className="list-group-item-value">{this.props.label}</span>
            </a>
        </li>
    }
}