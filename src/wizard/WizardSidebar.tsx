import * as React from 'react'

export class WizardSidebar extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="wizard-pf-sidebar">
            <ul className="list-group">
                {this.props.children}
            </ul>
        </div>
    }
}