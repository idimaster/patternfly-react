import * as React from 'react';

import { NavbarStore } from './store';

export function VNavbar(constructor : typeof React.Component & NavbarStore) : any {
    const OriginalType: typeof React.Component = constructor as typeof React.Component;

    class VNavbarTrait extends OriginalType<any, any> {

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
                        {(this as NavbarStore).getBrand ? (this as NavbarStore).getBrand() : null}
                    </div>
                    <nav className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            {(this as NavbarStore).getLeftPanelElements() ? (this as NavbarStore).getLeftPanelElements() : null}
                        </ul>
                        <ul className="nav navbar-nav navbar-right navbar-iconic">
                            {(this as NavbarStore).getRightPanelElements() ? (this as NavbarStore).getRightPanelElements() : null}
                        </ul>
                    </nav>
                </nav>)
        }
    }

    return VNavbarTrait;
}
