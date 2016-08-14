import * as React from 'react'

import { Navbar, DefaultNavbar } from './Navbar';

export function VNavbarDecorator(constructor: any): any {
    const OriginalType: typeof DefaultNavbar = constructor as typeof DefaultNavbar;

    class NvbarTrait extends OriginalType {

        render(): React.ReactElement<any> {
            return (
                <nav className="navbar navbar-pf-vertical">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        {this.getBrand()}
                    </div>
                    <nav className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            {this.getLeft()}
                        </ul>
                        <ul className="nav navbar-nav navbar-right navbar-iconic">
                            {this.getRight()}
                        </ul>
                    </nav>
                </nav>)
        }
    }

    return NvbarTrait;
}
