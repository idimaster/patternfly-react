export interface Payload {
    payload: any;
}

export interface CommandPayload extends  Payload{
    command: string;
}

export interface OnSelectCallback {
    (event: Payload)
}