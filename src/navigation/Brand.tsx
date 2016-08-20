import * as React from 'react'

export class Brand extends React.Component<any, any> {

    render(): React.ReactElement<any> {
        return (
            <a href="/" className="navbar-brand">
                {this.props.children}
            </a>)
    }
}
