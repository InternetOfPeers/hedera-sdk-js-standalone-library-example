import * as hashgraphSDK from '@hashgraph/sdk';

// NOTE: Test operation, uncomment this to test
//let priv = hashgraphSDK.PrivateKey.generate();
//let pub = priv.publicKey;
//console.log("Randomly generated key pair", priv.toString(), pub.toString());

// Expose the sdk externally if you want to test with the console
window.hashgraph = hashgraphSDK; 

console.debug("Hashgraph SDK 2.19.1 Standalone library loaded");
