import { randomUUIDv7 } from "bun";
import type { OutgoingMessage, SignupOutgoingMessage, ValidateOutgoingMessage } from "../../packages/common";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import nacl_util from "tweetnacl-util";

const CALLBACKS: { [callbackId: string]: (data: SignupOutgoingMessage) => void } = {}

let validatorId: string | null = null;

async function main() {
    const keypair = Keypair.fromSecretKey(
        Uint8Array.from(JSON.parse(process.env.PRIVATE_KEY!))
    );
    const ws = new WebSocket("ws://localhost:8081");
    // Receiving Message from Other Side / Hub
    ws.onmessage = async (event) => {
        const data: OutgoingMessage = JSON.parse(event.data);
        /// Validator initates signup message and got response from Hub
        if (data.type === 'signup') {
            //Thereafter simply validator have to call back and delete
            CALLBACKS[data.data.callbackId]?.(data.data)
            delete CALLBACKS[data.data.callbackId];
        }
        // Message Reach/Receive here in Validator which call ValidateHandler
        // validator.socket.send => Hub Message to Validate Reach here
        else if (data.type === 'validate') {
            await validateHandler(ws, data.data, keypair);
        }
    }
    // Where do we initiate Signup Request => when connection opens
    ws.onopen = async () => {
        const callbackId = randomUUIDv7(); // Generate callbackid 
        // Response from Hub is stored Here of Validatorid/ callback is called here which was waiting for pending response
        CALLBACKS[callbackId] = (data: SignupOutgoingMessage) => {
            // Stores validatorId in Global Variable => Set validator id
            validatorId = data.validatorId; //Eventually control reach here
        }
        const signedMessage = await signMessage(`Signed message for ${callbackId}, ${keypair.publicKey}`, keypair);

        // Validator SignUp Request is Initiated here
        // Validator send json whenever they connect to us we receieve it over in the hub at verify()
        ws.send(JSON.stringify({
            type: 'signup',
            data: {
                callbackId,
                ip: '127.0.0.1',
                publicKey: keypair.publicKey,
                signedMessage,
            },
        }));
    }
}

// Validator Doing The Task of Validating/Evaluating Uptime
async function validateHandler(ws: WebSocket, { url, callbackId, websiteId }: ValidateOutgoingMessage, keypair: Keypair) {
    console.log(`Validating ${url}`);
    const startTime = Date.now();
    // Signs the messsage by Validator
    const signature = await signMessage(`Replying to ${callbackId}`, keypair);

    try {
        const response = await fetch(url);
        const endTime = Date.now();
        const latency = endTime - startTime;
        const status = response.status;

        console.log(url);
        console.log(status);

        // Validator Sends The Uptick / Respond back to Hub 
        ws.send(JSON.stringify({
            type: 'validate',
            data: {
                callbackId,
                status: status === 200 ? 'Good' : 'Bad',
                latency,
                websiteId,
                validatorId,
                signedMessage: signature,
            },
        }));
    } catch (error) {
        ws.send(JSON.stringify({
            type: 'validate',
            data: {
                callbackId,
                status: 'Bad',
                latency: 1000,
                websiteId,
                validatorId,
                signedMessage: signature,
            },
        }));
        console.error(error);
    }
}

async function signMessage(message: string, keypair: Keypair) {
    const messageBytes = nacl_util.decodeUTF8(message);
    const signature = nacl.sign.detached(messageBytes, keypair.secretKey);

    return JSON.stringify(Array.from(signature));
}

main();

setInterval(async () => {

}, 10000);