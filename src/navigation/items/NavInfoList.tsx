import * as React from 'react'

import {NavItem} from "./NavItem";
import {OnClearCallback} from "./OnClearCallback";

export class NavInfoList extends NavItem<{ id: string, label: string, onClear?: OnClearCallback }> {
    static propTypes() {
        return {
            id: React.PropTypes.string.isRequired,
            label: React.PropTypes.string.isRequired,
            onClear: React.PropTypes.func
        }
    }

    private handleClear = () => {
        if (this.props.onClear) {
            this.props.onClear(this.props.id);
        }
    };


    render(): React.ReactElement<any> {
        const length =  React.Children.count(this.props.children);
        return <li className="dropdown">
            <a className="dropdown-toggle nav-item-iconic" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <span title={this.props.label} className="fa pficon-flag"></span>
                <span className="badge">{length}</span>
            </a>
            <div className="dropdown-menu infotip bottom-right">
                <div className="arrow"></div>
                <ul className="list-group">
                    {this.props.children}
                </ul>
                <div className="footer">
                    <a onClick={this.handleClear}>Clear Messages</a>
                </div>
            </div>
        </li>
    }
}