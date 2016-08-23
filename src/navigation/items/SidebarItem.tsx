import * as React from 'react'

export class SidebarItem extends React.Component<{ label: string, icon: string, route: string}, any> {
    static propTypes() {
        return {
            label: React.PropTypes.string.isRequired,
            icon: React.PropTypes.string.isRequired,
            route: React.PropTypes.string.isRequired
        }
    }

    render(): React.ReactElement<any> {
        return <li className="list-group-item">
            <a href={this.props.route}>
                <span className={'fa ' + this.props.icon} data-toggle="tooltip" title={this.props.label}></span>
                <span className="list-group-item-value">{this.props.label}</span>
            </a>
        </li>
    }
}