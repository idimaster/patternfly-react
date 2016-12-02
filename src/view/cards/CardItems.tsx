import * as React from 'react'

export class CardItems extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="card-pf-items text-center">
            {this.props.children}
        </div>
    }
}