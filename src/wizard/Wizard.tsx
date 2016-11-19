import * as React from 'react'

export class Wizard extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div id="firstStep">
            <div className="wizard-pf">
                {this.props.children}
            </div>
        </div>
    }
}