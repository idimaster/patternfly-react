import * as React from 'react'

export class SidebarListItem extends React.Component<{label: string}, any> {
    static propTypes() {
        return {
            label: React.PropTypes.string.isRequired
        }
    }

    render(): React.ReactElement<any> {
        return <li className="list-group-item">
            <a>
                <span className="list-group-item-value">{this.props.label}</span>
            </a>
        </li>
    }
}