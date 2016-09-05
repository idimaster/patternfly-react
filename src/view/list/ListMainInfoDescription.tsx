import * as React from 'react'
const invariant = require('invariant');

interface PartsDto {
    header?: React.ReactElement<any>
    text: React.ReactElement<any>
}

export class ListMainInfoDescriptionHeader extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="list-group-item-heading">
            {this.props.children}
        </div>
    }
}

export class ListMainInfoDescriptionText extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="list-group-item-text">
            {this.props.children}
        </div>
    }
}

export class ListMainInfoDescription extends React.Component<any, any> {
    static get Header(): typeof ListMainInfoDescriptionHeader {
        return ListMainInfoDescriptionHeader;
    }

    static get Text(): typeof ListMainInfoDescriptionText {
        return ListMainInfoDescriptionText;
    }

    private findParts(children: React.ReactNode): PartsDto {
        let header = null;
        let text = null;
        React.Children.forEach(children, child => {
            if(React.isValidElement(child)) {
                switch (child.type) {
                    case ListMainInfoDescriptionHeader:
                        invariant(header == null, 'Only one Header element allowed.');
                        header = child;
                        break;
                    case ListMainInfoDescriptionText:
                        invariant(text == null, 'Only one Text element allowed.');
                        text = child;
                        break;
                    default:
                        invariant(false, 'Only Header and Text elements allowed as child for ListMainInfoDescription')
                }
            }
        });
        return {header, text}
    }

    render(): React.ReactElement<any> {
        const parts = this.findParts(this.props.children);
        return <div className="list-view-pf-description">
            {parts.header}
            {parts.text}
        </div>
    }
}