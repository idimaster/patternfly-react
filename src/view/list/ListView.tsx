import * as React from 'react'

export class ListView extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="list-group list-view-pf list-view-pf-view">
            {this.props.children}
        </div>
    }
}