import * as React from 'react'

import {CardTop} from './CardTop';
import {CardInfo} from './CardInfo';
import {CardHeader} from './CardHeader';
import {CardItems} from './CardItems';
import {CardItem} from './CardItem';

import {CommandPayload, OnSelectCallback} from '../../events';

export class Card extends React.Component<{onClick?: OnSelectCallback, payload?: CommandPayload, multiSelect?: boolean, small?: boolean}, any> {
    static propTypes() {
        return {
            onClick: React.PropTypes.func,
            payload: React.PropTypes.object,
            multiSelect: React.PropTypes.bool,
            small: React.PropTypes.bool
        }
    }

    static get Top(): typeof CardTop {
        return CardTop;
    }

    static get Info(): typeof CardInfo {
        return CardInfo;
    }

    static get Header(): typeof CardHeader {
        return CardHeader;
    }

    static get Items(): typeof CardItems {
        return CardItems;
    }

    static get Item(): typeof CardItem {
        return CardItem;
    }

    private handleClick = () => {
        if (this.props.onClick) {
            this.props.onClick(this.props.payload);
        }
    }

    render(): React.ReactElement<any> {
        let size = this.props.small ? 'col-xs-12 col-sm-4 col-md-3 col-lg-2' : 'col-xs-12 col-sm-6 col-md-4 col-lg-3';
        let style = this.props.multiSelect ? 'card-pf-view-multi-select' : 'card-pf-view-single-select';
        return <div className={size}>
            <div className={'card-pf card-pf-view card-pf-view-select ' + style} onClick={this.handleClick}>
                <div className="card-pf-body">
                    {this.props.children}
                </div>
                <div className="card-pf-view-checkbox">
                    <input type="checkbox"/>
                </div>
            </div>
        </div>
    }
}