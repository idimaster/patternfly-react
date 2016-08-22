import * as React from 'react'

export class LeftPanel extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <ul key='left' className="nav navbar-nav">
            {this.props.children}
        </ul>
    }
}