import {Payload} from  './Payload'

export interface CommandPayload extends  Payload {
    command: string;
}

export interface OnSelectCallback {
    (event: CommandPayload)
}