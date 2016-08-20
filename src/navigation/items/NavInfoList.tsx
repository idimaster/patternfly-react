import * as React from 'react'

import { NavItem } from "./NavItem";
import { StoreCallback } from "../store/DropDownStore";

export class NavInfoList extends NavItem<{ name: string, store: StoreCallback }> {
    static propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            store: React.PropTypes.func.isRequired
        }
    }

    render(): React.ReactElement<{ name: string }> {
        const items = this.props.store();
        return <li className="dropdown">
            <a className="dropdown-toggle nav-item-iconic" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <span title={this.props.name} className="fa pficon-flag"></span>
                <span className="badge">{items.length}</span>
            </a>
            <div className="dropdown-menu infotip bottom-right">
                <div className="arrow"></div>
                <ul className="list-group">
                    {items.map((item, index) => {
                        return <li key={index} className="list-group-item">
                            <span className="i pficon pficon-info"></span> {item.name}
                        </li>
                    })}
                </ul>
                <div className="footer">
                    <a>Clear Messages</a>
                </div>
            </div>
        </li>
    }
}