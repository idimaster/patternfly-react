import * as React from 'react'

import { NavItem } from "./NavItem";

export class NavInfoList extends NavItem<{ label: string }> {
    static propTypes() {
        return {
            label: React.PropTypes.string.isRequired
        }
    }

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
                    <a>Clear Messages</a>
                </div>
            </div>
        </li>
    }
}