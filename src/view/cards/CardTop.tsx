import * as React from 'react'

export class CardTop extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="card-pf-top-element">
            {this.props.children}
        </div>
    }
}
