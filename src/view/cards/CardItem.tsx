import * as React from 'react'

export class CardItem extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="card-pf-item">
            {this.props.children}
        </div>
    }
}