import * as React from 'react'

export class NavItem<P> extends React.Component<P, any> {

    render(): React.ReactElement<any> {
        return <li>{this.props.children}</li>
    }
}