import * as React from 'react'

import * as uuid from 'node-uuid'

export class ListActions extends React.Component<any, any> {
    private id: string;

    componentWillMount() {
        this.id = uuid.v4();
    }

    render(): React.ReactElement<any> {
        return <div className="list-view-pf-actions">
            <button className="btn btn-default">Action</button>
            <div className="dropdown pull-right dropdown-kebab-pf">
                <button className="btn btn-link dropdown-toggle" type="button" id={this.id}
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                </button>
                <ul className="dropdown-menu dropdown-menu-right" aria-labelledby={this.id}>
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                </ul>
            </div>
        </div>
    }
}