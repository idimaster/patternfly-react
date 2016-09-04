import {Payload} from  './Payload'

export interface ActionPayload extends  Payload {
    action: string;
}

export interface OnActionCallback{
    (event: ActionPayload)
}