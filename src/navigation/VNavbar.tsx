/**
 * Created by Dmitry<dizumskiy@eisgroup.com> on 8/15/16.
 */

import * as React from 'react'

import { Navbar } from './Navbar'

export class VNavbar extends React.Component<{ provider: Navbar }, any> {
    static propTypes() {
        return {
            provider: React.PropTypes.string.isRequired
        }
    }

    render(): React.ReactElement<{ provider: Navbar }> {
        return (
            <nav className="navbar navbar-pf-vertical">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    {this.props.provider.getBrand ? this.props.provider.getBrand() : null}
                </div>
                <nav className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        {this.props.provider.getLeft() ? this.props.provider.getLeft() : null}
                    </ul>
                    <ul className="nav navbar-nav navbar-right navbar-iconic">
                        {this.props.provider.getRight() ? this.props.provider.getRight() : null}
                    </ul>
                </nav>
            </nav>)
    }
}
