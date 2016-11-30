import * as React from 'react'

import {CardBody} from './CardBody';
import {CardTop} from './CardTop';
import {CardInfo} from './CardInfo';
import {CardHeader} from './CardHeader';

export class Card extends React.Component<any, any> {
    static get Body(): typeof CardBody {
        return CardBody;
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

    render(): React.ReactElement<any> {
        return <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card-pf card-pf-view ">
                {this.props.children}
            </div>
        </div>
    }
}