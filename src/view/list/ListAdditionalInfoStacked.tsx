import * as React from 'react'

export class ListAdditionalInfoStacked extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="list-view-pf-additional-info-item list-view-pf-additional-info-item-stacked">
            {this.props.children}
        </div>
    }
}