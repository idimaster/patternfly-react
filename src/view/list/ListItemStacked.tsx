import * as React from 'react'

export class ListItemStacked extends React.Component<{ active?: boolean}, any> {
    static propTypes() {
        return {
            active: React.PropTypes.bool
        }
    }

    render(): React.ReactElement<any> {
        var style = 'list-group-item list-view-pf-stacked';
        if (this.props.active) style += ' active';
        return <div className={style}>
            {this.props.children}
        </div>
    }
}