import * as React from 'react'

export class WizardMain extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="wizard-pf-main">
            <div>
            {this.props.children}
            </div>
        </div>
    }
}