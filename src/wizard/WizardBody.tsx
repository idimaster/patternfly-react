import * as React from 'react'

export class WizardBody extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="wizard-pf-body clearfix">
            {this.props.children}
        </div>
    }
}