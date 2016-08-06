import * as React from 'react'

export class Header extends React.Component<{ label: string}, any> {
    static propTypes() {
        return {
            label: React.PropTypes.string.isRequired
        }
    }

    render(): React.ReactElement<{ label: string}> {
        return (
            <div>
                <div className='left'><h2>{this.props.label}</h2></div>
                <div className='right'>{this.props.children}</div>
                <div className='clear'></div>
                <hr/>
            </div>)
    }
}