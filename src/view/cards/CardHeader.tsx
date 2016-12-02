import * as React from 'react'

export class CardHeader extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <h2 className="card-pf-title text-center">
            {this.props.children}
        </h2>
    }
}