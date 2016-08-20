import * as React from 'react'
import * as uuid from 'node-uuid'

import { NavItem } from "./NavItem";
import { StoreCallback } from "../store/DropDownStore";

export class NavDropDown extends NavItem<{ name: string, icon: string, store: StoreCallback }> {
    static propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            icon: React.PropTypes.string.isRequired,
            store: React.PropTypes.func.isRequired
        }
    }

    private id: string;

    componentWillMount() {
        this.id = uuid.v4();
    }

    render(): React.ReactElement<{ name: string, icon: string }> {
        return <li className="dropdown">
            <a className="dropdown-toggle nav-item-iconic" id={ this.id } data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <span title={ this.props.name } className={'fa ' + this.props.icon }></span>
                <span className="caret"></span>
            </a>
            <ul className="dropdown-menu" aria-labelledby={ this.id }>
                {this.props.store().map((item, index) => {
                    return <li key={index}><a href="#">{item.name}</a></li>
                })}
            </ul>
        </li>
    }
}