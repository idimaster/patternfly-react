import * as React from 'react'

export class CheckBox extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="list-view-pf-checkbox">
            <input type="checkbox"/>
        </div>
    }
}