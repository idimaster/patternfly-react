import * as React from 'react'

export class NavInfoItem extends React.Component<{label: string}, any> {
    static propTypes() {
        return {
            label: React.PropTypes.string.isRequired
        }
    }

    render(): React.ReactElement<any> {
        return <li className="list-group-item">
            <span className="i pficon pficon-info"></span> {this.props.label}
        </li>
    }
}