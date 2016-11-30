import * as React from 'react'

export class Cards extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="row row-cards-pf">
            {this.props.children}
        </div>
    }
}