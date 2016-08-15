import * as React from 'react'

import { Navbar } from './Navbar';

export function VNavbarDecorator(constructor: Navbar): any {
    const OriginalType: typeof React.Component = constructor as typeof React.Component;

    class NavbarTrait extends OriginalType<any, any> {

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
                        {(this as Navbar).getBrand ? (this as Navbar).getBrand() : null}
                    </div>
                    <nav className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            {(this as Navbar).getLeft() ? (this as Navbar).getLeft() : null}
                        </ul>
                        <ul className="nav navbar-nav navbar-right navbar-iconic">
                            {(this as Navbar).getRight() ? (this as Navbar).getRight() : null}
                        </ul>
                    </nav>
                </nav>)
        }
    }

    return NavbarTrait;
}
