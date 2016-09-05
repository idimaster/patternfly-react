import * as React from 'react'

export class ListAdditionalInfo extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="list-view-pf-additional-info-item">
            {this.props.children}
        </div>
    }
}