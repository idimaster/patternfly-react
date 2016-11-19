import * as React from 'react'

export class WizardSteps extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="wizard-pf-steps">
            <ul className="wizard-pf-steps-indicator">
                {this.props.children}
            </ul>
        </div>
    }
}