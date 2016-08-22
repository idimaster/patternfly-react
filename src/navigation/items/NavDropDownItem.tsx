import * as React from 'react'

export class NavDropDownItem extends React.Component<{label: string}, any> {
    static propTypes() {
        return {
            label: React.PropTypes.string.isRequired
        }
    }

    render(): React.ReactElement<any> {
        return <li><a href="#">{this.props.label}</a></li>
    }
}