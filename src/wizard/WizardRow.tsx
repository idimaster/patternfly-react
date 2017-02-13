import * as React from 'react'

export class WizardRow extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="wizard-pf-row">
                {this.props.children}
        </div>
    }
}