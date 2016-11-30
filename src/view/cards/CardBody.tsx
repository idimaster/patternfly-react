import * as React from 'react'

export class CardBody extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="card-pf-body">
            {this.props.children}
        </div>
    }
}