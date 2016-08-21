import * as React from 'react'
import {ComponentLifecycle} from "react";

export interface SidebarElement
{}

export class SidebarItem extends React.Component<{ label: string, icon: string}, any> implements SidebarElement {
    static propTypes() {
        return {
            label: React.PropTypes.string.isRequired,
            icon: React.PropTypes.string.isRequired
        }
    }

    render(): React.ReactElement<any> {
        return (
            <li className="list-group-item">
                <a>
                    <span className={'fa ' + this.props.icon} data-toggle="tooltip" title={this.props.label}></span>
                    <span className="list-group-item-value">{this.props.label}</span>
                </a>
            </li>)
    }
}