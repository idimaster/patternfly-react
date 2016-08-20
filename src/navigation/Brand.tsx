import * as React from 'react'

export class Brand extends React.Component<any, any> {

    render(): React.ReactElement<any> {
        return (
            <a href="/" className="navbar-brand">
                <img className="navbar-brand-icon" src="/assets/img/logo-alt.svg" alt=""/><img className="navbar-brand-name" src="/assets/img/brand-alt.svg" alt="PatternFly Enterprise Application" />
            </a>)
    }
}
