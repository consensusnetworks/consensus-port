// import { useState } from '#app'

// interface Cache {
//   [key: string]: any
// }
//
// // In-memory cache for accumulate client to store the response of large requests
// const cache = (function (): { getInstance: () => Cache } {
//     let cache: Cache;
//
//     function init() {
//         return {
//             init: new Date(),
//             get: (key: string): any | undefined => {
//                 return cache[key];
//             },
//             set: (key: string, value: any): string | void => {
//                 cache[key] = value;
//                 return key;
//             },
//             has: (key: string): boolean => {
//                 return key in cache;
//             },
//             delete: (key: string) => {
//                 delete cache[key];
//             },
//             clear: () => {
//                 cache = {};
//             },
//             size: () => {
//                 return Object.keys(cache).length;
//             },
//             keys: () => {
//                 return Object.keys(cache);
//             }
//         }
//     }
//
//     return {
//         getInstance: () => {
//             if (!cache) {
//                 cache = init()
//             }
//             return cache
//         }
//     }
// })()
//
// interface RpcRequest {
//   jsonrpc: string;
//   id: number;
//   method: string;
//   params: { [key: string]: any };
// }
//
// interface RpcResponse{
//   jsonrpc: string;
//   result: any;
//   id: number;
// }
//
//
// type AccumulateUrl = `acc://${string}/ACME`;
//
// interface TransactionHistoryRequest {
//   url: AccumulateUrl;
//   start: number;
//   count: number;
// }
//
// interface TransactionQueryResponse {
//   jsonrpc: string;
//   result: {
//     type: string;
//     data: {
//       from: string;
//       to: {
//         url: string;
//         amount: number;
//         txid: string;
//       }[];
//     };
//     sponsor: string;
//     keyPage: {
//       height: number;
//     };
//     txid: string;
//     signer: {
//       publicKey: string;
//       nonce: number;
//     };
//     sig: string;
//     status: {
//       code: string;
//     };
//     syntheticTxids: string[];
//   };
//   id: number;
// }
//
// export interface RpcErr {
//   code: number;
//   message: string;
//   meaning: string;
// }
//
// export enum Env {
//   Testnet = "testnet",
//   Mainnet = "mainnet",
//   Devnet = "devnet",
// }

//
// const rpcErrCodes = {
//   "-32700": {
//     code: -32700,
//     message: "Parse error",
//     meaning:
//       "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
//   },
//   "-32600": {
//     code: -32600,
//     message: "Invalid Request",
//     meaning: "The JSON sent is not a valid Request object.",
//   },
//   "-32601": {
//     code: -32601,
//     message: "Method not found",
//     meaning: "The method does not exist / is not available.",
//   },
//   "-32602": {
//     code: -32602,
//     message: "Invalid params",
//     meaning: "Invalid method parameter(s).",
//   },
//   "-32603": {
//     code: -32603,
//     message: "Internal error",
//     meaning: "Internal JSON-RPC error.",
//   },
//   "-32000": {
//     code: -32000,
//     message: "Server error",
//     meaning: "Reserved for implementation-defined server-errors.",
//   },
//   "-32099": {
//     code: -32099,
//     message: "Server error",
//     meaning: "Reserved for implementation-defined server-errors.",
//   },
// };
//

import { useNuxtApp } from "#app";
import crossFetch from 'cross-fetch';

export type useAccumulate = {
    getTransactionHistory: ({ url, start, count }) => Promise<any>;
    getTransaction: (url: string, txid: string) => Promise<any>;
};

export const useAccumulate = (net: string): useAccumulate => {
    const { $instance: rpc } = useNuxtApp()

    // defaults for the rpc
    const defaults = {
      method: 'POST',
        headers: {'Content-Type': 'application/json'},
    };

    // id for the rpc  which is incremented for each call
    let id = 0

    async function getTransaction(txId: string): Promise<any> {
        const req = await rpc("https://testnet.accumulatenetwork.io/v2", {
            ...defaults,
            body: JSON.stringify({
                jsonrpc: '2.0',
                id: id++,
                method: 'query-tx',
                params: {
                    txid: txId,
                },
            }),
        })
        return req.json()
    }

     async function getTransactionHistory({ url, start, count }): Promise<any> {
        try {
            const req = await rpc("https://testnet.accumulatenetwork.io/v2", {
                ...defaults,
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    id: id++,
                    method: 'query-tx-history',
                    params: {
                        url,
                        start,
                        count,
                    },
                }),
            })
            if (!req.ok) {
                // check the error message
            }
        } catch (err) {
            console.log(err)
        }
    }

    return {
        getTransaction,
        getTransactionHistory,
    }
 }