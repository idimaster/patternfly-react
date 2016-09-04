import * as React from 'react'

export class ListItem extends React.Component<{ active?: boolean}, any> {
    static propTypes() {
        return {
            active: React.PropTypes.bool
        }
    }

    render(): React.ReactElement<any> {
        var style = 'list-group-item';
        if (this.props.active) style += ' active';
        return <div className={style}>
            {this.props.children}
        </div>
    }
}