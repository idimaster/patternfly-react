import * as React from 'react'

import {OnSelectCallback, CommandPayload} from "./OnSelectCallback";

export class NavDropDownItem extends React.Component<{label: string, onSelect?: OnSelectCallback, payload?: CommandPayload}, any> {
    static propTypes() {
        return {
            label: React.PropTypes.string.isRequired,
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
        return <li><a onClick={this.handleSelect}>{this.props.label}</a></li>
    }
}