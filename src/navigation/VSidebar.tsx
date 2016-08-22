import * as React from 'react'

export class VSidebar extends React.Component<any, any> {

    render(): React.ReactElement<any> {
        return <div className="nav-pf-vertical nav-pf-vertical-with-sub-menus hide-nav-pf">
            <ul className="list-group">
                {this.props.children}
            </ul>
        </div>
    }
}
