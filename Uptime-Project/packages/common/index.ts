// Incoming message to hub when validator sends it's Credentials
export interface SignupIncomingMessage { // initiated by validator
    ip: string;
    publicKey: string;
    signedMessage: string;
    callbackId: string;
}
// Validator Sending response to hub i.e the upticks for website
export interface ValidateIncomingMessage { // initiated by hub
    callbackId: string;
    signedMessage: string;
    status: 'Good' | 'Bad';
    latency: number;
    websiteId: string;
    validatorId: string;
}

// Hub Outgoing Responding back to Signup Request 
export interface SignupOutgoingMessage { // initiated by validator
    validatorId: string;
    callbackId: string;
}
// Hub Sending Validator a request to check uptime of website 
export interface ValidateOutgoingMessage { // initiated by hub
    url: string,
    callbackId: string,
    websiteId: string;
}

export type IncomingMessage = {
    type: 'signup'
    data: SignupIncomingMessage
} | {
    type: 'validate'
    data: ValidateIncomingMessage
}

export type OutgoingMessage = {
    type: 'signup'
    data: SignupOutgoingMessage
} | {
    type: 'validate'
    data: ValidateOutgoingMessage
}