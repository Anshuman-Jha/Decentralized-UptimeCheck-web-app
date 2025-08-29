import { randomUUIDv7, type ServerWebSocket } from "bun";
import type { IncomingMessage, SignupIncomingMessage } from "../../packages/common";
import { prismaClient } from "../../packages/db/prisma/src";
import { PublicKey } from "@solana/web3.js";
import nacl from "tweetnacl";
import nacl_util from "tweetnacl-util";

// Array of all Available Validators when it dies we remove it from here
const availableValidators: { validatorId: string, socket: ServerWebSocket<unknown>, publicKey: string }[] = [];

// Global Callbacks Array=> callbackId and Signature function called with data of response/incoming response 
const CALLBACKS: { [callbackId: string]: (data: IncomingMessage) => void } = {}
const COST_PER_VALIDATION = 100; // in lamports

// Standard way to upgrade http server into Web Socket server => In Bun
Bun.serve({
    fetch(req, server) {
        if (server.upgrade(req)) {
            return;
        }
        return new Response("Upgrade failed", { status: 500 });
    },
    port: 8081,
    websocket: { // message callback 
        async message(ws: ServerWebSocket<unknown>, message: string) {
            const data: IncomingMessage = JSON.parse(message);

            if (data.type === 'signup') {
                // Hub verify final signature=>some long text send by validator which is basically callbackId,publickey signed by private key
                // verifyMessage Solana Function Get Called whenever Signature received from Validator  

                const verified = await verifyMessage( // We Receive From Validator Here
                    `Signed message for ${data.data.callbackId}, ${data.data.publicKey}`,
                    data.data.publicKey, // public key of corresponding private key it signed message with
                    data.data.signedMessage // some jebrish long signed message
                );
                if (verified) { // If Signatures is Verified Signup Handler is Called
                    await signupHandler(ws, data.data);
                }
                // Hub Initates a request to all validators afterwards when hub get response we call Callback
            } else if (data.type === 'validate') {
                const callback = CALLBACKS[data.data.callbackId];
                if (callback) {
                    callback(data); // Hub callback() after getting response from validator
                    delete CALLBACKS[data.data.callbackId]; // Afterwards deleting that entry
                }
            }
        },
        // When Validators die / we remove them from available
        async close(ws: ServerWebSocket<unknown>) {
            availableValidators.splice(availableValidators.findIndex(v => v.socket === ws), 1);
        }
    },
});

async function signupHandler(ws: ServerWebSocket<unknown>, { ip, publicKey, signedMessage, callbackId }: SignupIncomingMessage) {
    // Does this validator already Exists => given same public key
    const validatorDb = await prismaClient.validators.findFirst({
        where: {
            publicKey,
        },
    });
    // Stores Entry in DataBase if does not exist =>Send Validator id 
    if (validatorDb) {
        // Hub Sends 'Validator id' to Validator as response
        ws.send(JSON.stringify({
            type: 'signup',
            data: {
                validatorId: validatorDb.id,
                callbackId,
            },
        }));
        // push them into global arrray of available vallidators
        availableValidators.push({
            validatorId: validatorDb.id,
            socket: ws,
            publicKey: validatorDb.publicKey,
        });
        return;
    }

    //TODO: Given the ip, return the location => to find from where they are reporting
    const validator = await prismaClient.validators.create({
        data: {
            id: crypto.randomUUID(),
            ipAddress: ip,
            publicKey,
            location: 'unknown',
            latency: 0,
        },
    });
    // Hub responsds you are Signed up => Your Validator id
    ws.send(JSON.stringify({
        type: 'signup',
        data: {
            validatorId: validator.id,
            callbackId,
        },
    }));
    // Get Validator addded in 
    availableValidators.push({
        validatorId: validator.id,
        socket: ws,
        publicKey: validator.publicKey,
    });
}

async function verifyMessage(message: string, publicKey: string, signature: string) {
    // Converts Signed Message to Bunch of Bytes => 0 to 5
    // This is Function which Check/Verify that Message is signed by Real Owner using it's Private Key 
    // Solana Function=> Checks via Public key that this is the owner
    const messageBytes = nacl_util.decodeUTF8(message);
    const result = nacl.sign.detached.verify(
        messageBytes,
        new Uint8Array(JSON.parse(signature)),
        new PublicKey(publicKey).toBytes(),
    );

    return result;
}

setInterval(async () => {
    // Getting all the website from data =base
    const websitesToMonitor = await prismaClient.website.findMany({
        where: {
            disabled: false,
        },
    });
    // Each Website to Every Validator => Distributing in validaters => Must Improve  
    for (const website of websitesToMonitor) {
        availableValidators.forEach(validator => {
            const callbackId = randomUUIDv7(); // Giving the validator callbackId
            console.log(`Sending validate to ${validator.validatorId} ${website.url}`);
            // Hub Telling Validator to validate the website which Reach Other Side on Validator
            //This is  Receieved Over There => else if (data.type === 'validate') in Validator
            validator.socket.send(JSON.stringify({
                type: 'validate',
                data: {
                    url: website.url,
                    callbackId
                },
            }));

            //I'm Defining this function not yet calling it
            // Flow will Reach Here when Validator Responds Callback will be called here
            /*   ws.send(JSON.stringify({
                   type: 'validate', */ // Callback function Runs after this
            CALLBACKS[callbackId] = async (data: IncomingMessage) => {
                if (data.type === 'validate') { // Hub initiates it
                    // we will extract the data validator returned 
                    const { validatorId, status, latency, signedMessage } = data.data;
                    // Verify the Message Sent by Validator 
                    const verified = await verifyMessage(
                        `Replying to ${callbackId}`,
                        validator.publicKey,
                        signedMessage
                    );
                    if (!verified) {
                        return; //if didn't verify
                    }
                    // These below 2 are Transaction If Either requests failed none of them run 
                    await prismaClient.$transaction(async (tx) => { // Update Upticks 
                        await tx.websiteTicks.create({
                            data: {
                                websiteId: website.id,
                                validatorId,
                                status: status === 'Good' ? 'GOOD' : 'BAD' as any,
                                latency,
                                createdAt: new Date(),
                            },
                        });
                        // Update / Increment the balance of Validators 
                        await tx.validators.update({
                            where: { id: validatorId },
                            data: {
                                pendingPayouts: { increment: COST_PER_VALIDATION },
                            },
                        });
                    });
                }
            };
        });
    }
}, 60 * 1000);