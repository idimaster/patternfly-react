import * as React from 'react'

export class ListMainInfoLeft extends React.Component<any, any> {

    render(): React.ReactElement<any> {
        return <div className="list-view-pf-left">
            {this.props.children}
        </div>
    }
}