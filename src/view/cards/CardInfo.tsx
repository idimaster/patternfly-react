import * as React from 'react'

export class CardInfo extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <p className="card-pf-info text-center">
            {this.props.children}
        </p>
    }
}