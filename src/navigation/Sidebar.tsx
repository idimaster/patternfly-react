import * as React from 'react'

export class Sidebar extends React.Component<{ label: string}, any> {
    static propTypes() {
        return {
            label: React.PropTypes.string.isRequired
        }
    }

    render(): React.ReactElement<{ label: string}> {
        return (
            <div className="nav-pf-vertical nav-pf-vertical-with-sub-menus hide-nav-pf">
            <ul className="list-group">
                <li className="list-group-item">
                    <a>
                        <span className="fa fa-dashboard" data-toggle="tooltip" title="Dashboard"></span>
                        <span className="list-group-item-value">Dashboard</span>
                    </a>
                </li>
                <li className="list-group-item">
                    <a>
                        <span className="fa fa-shield" data-toggle="tooltip" title="Dolor"></span>
                        <span className="list-group-item-value">Dolor</span>
                    </a>
                </li>
                <li className="list-group-item active secondary-nav-item-pf" data-target="#ipsum-secondary">
                    <a>
                        <span className="fa fa-space-shuttle" data-toggle="tooltip" title="Ipsum"></span>
                        <span className="list-group-item-value">Ipsum</span>
                    </a>
                    <div id="-secondary" className="nav-pf-secondary-nav">
                        <div className="nav-item-pf-header">
                            <a className="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
                            <span>Ipsum</span>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item active " data-target="#ipsum-intellegam-tertiary">
                                <a>
                                    <span className="list-group-item-value">Intellegam</span>
                                </a>
                            </li>
                            <li className="list-group-item " data-target="#ipsum-copiosae-tertiary">
                                <a>
                                    <span className="list-group-item-value">Copiosae</span>
                                </a>
                            </li>
                            <li className="list-group-item " data-target="#ipsum-patrioque-tertiary">
                                <a>
                                    <span className="list-group-item-value">Patrioque</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="list-group-item secondary-nav-item-pf" data-target="#amet-secondary">
                    <a>
                        <span className="fa fa-paper-plane" data-toggle="tooltip" title="Amet"></span>
                        <span className="list-group-item-value">Amet</span>
                    </a>
                    <div id="amet-secondary" className="nav-pf-secondary-nav">
                        <div className="nav-item-pf-header">
                            <a className="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
                            <span>Amet</span>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item " data-target="#amet-detracto-tertiary">
                                <a>
                                    <span className="list-group-item-value">Detracto</span>
                                </a>

                            </li>
                            <li className="list-group-item " data-target="#amet-mediocrem-tertiary">
                                <a>
                                    <span className="list-group-item-value">Mediocrem</span>
                                </a>
                            </li>
                            <li className="list-group-item " data-target="#amet-corrumpit-tertiary">
                                <a>
                                    <span className="list-group-item-value">Corrumpit</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="list-group-item">
                    <a>
                        <span className="fa fa-graduation-cap" data-toggle="tooltip" title="Adipscing"></span>
                        <span className="list-group-item-value">Adipscing</span>
                    </a>
                </li>
                <li className="list-group-item">
                    <a>
                        <span className="fa fa-gamepad" data-toggle="tooltip" title="Lorem"></span>
                        <span className="list-group-item-value">Lorem</span>
                    </a>
                </li>
            </ul>
            </div>)
    }
}