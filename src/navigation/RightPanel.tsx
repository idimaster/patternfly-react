import * as React from 'react'

export class RightPanel extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <ul key='right' className="nav navbar-nav navbar-right navbar-iconic">
            {this.props.children}
        </ul>
    }
}