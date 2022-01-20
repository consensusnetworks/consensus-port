import { useNuxtApp } from "#app";
import {readonly, ref, onMounted} from "vue"



export const useAccumulate = (net: string): useAccumulate => {
    const { $instance: rpc } = useNuxtApp()

    const transactionHistory = ref<any>([])
    const transaction = ref<any>({})

    // defaults for the rpc request
    const defaults = {
      method: 'POST',
        headers: {'Content-Type': 'application/json'},
    };

    // each rpc request needs a unique id
    // a simple increment is enough, see below
    let id = 0

    // on mount, we want to get the transaction history
    onMounted(() => {
        console.log("on mount: get transaction history")


    })

    // get transaction by id
    async function getTransaction(txId: string): Promise<TransactionQueryResponse> {
        const tx = await rpc("https://testnet.accumulatenetwork.io/v2", {
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

        if (!tx.ok) return rpcErrCodes[tx.status.toString()]

        const data = await tx.json()
        transaction.value = data.result

    }

    // get transaction history by address, start and count
     async function getTransactionHistory(prop: TransactionHistoryRequest): Promise<any> {
        try {
            const history = await rpc("https://testnet.accumulatenetwork.io/v2", {
                ...defaults,
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    id: id++,
                    method: 'query-tx-history',
                    params: {
                        url: prop.url,
                        start: 0,
                        count: 100
                    },
                }),
            })

            if (!history.ok) return rpcErrCodes[history.status.toString()]

            const data = await history.json()
            transactionHistory.value = data.result.items
        } catch (err) {
            console.error(err)
        }
    }
    return {
        transaction: readonly(transaction),
        getTransaction,
        transactionHistory: readonly(transactionHistory),
        getTransactionHistory,
    }
 }

 export type useAccumulate = {
    transaction: any,
    transactionHistory: any,
    getTransactionHistory: ({ url, start, count }) => Promise<any>;
    getTransaction: (url: string, txid: string) => Promise<any>;
};

type AccumulateUrl = `acc://${string}/ACME`;

interface TransactionHistoryRequest {
  url: AccumulateUrl;
  start: number;
  count: number;
}

interface TransactionQueryResponse {
  jsonrpc: string;
  result: {
    type: string;
    data: {
      from: string;
      to: {
        url: string;
        amount: number;
        txid: string;
      }[];
    };
    sponsor: string;
    keyPage: {
      height: number;
    };
    txid: string;
    signer: {
      publicKey: string;
      nonce: number;
    };
    sig: string;
    status: {
      code: string;
    };
    syntheticTxids: string[];
  };
  id: number;
}

const rpcErrCodes = {
  "-32700": {
    code: -32700,
    message: "Parse error",
    meaning:
      "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
  },
  "-32600": {
    code: -32600,
    message: "Invalid Request",
    meaning: "The JSON sent is not a valid Request object.",
  },
  "-32601": {
    code: -32601,
    message: "Method not found",
    meaning: "The method does not exist / is not available.",
  },
  "-32602": {
    code: -32602,
    message: "Invalid params",
    meaning: "Invalid method parameter(s).",
  },
  "-32603": {
    code: -32603,
    message: "Internal error",
    meaning: "Internal JSON-RPC error.",
  },
  "-32000": {
    code: -32000,
    message: "Server error",
    meaning: "Reserved for implementation-defined server-errors.",
  },
  "-32099": {
    code: -32099,
    message: "Server error",
    meaning: "Reserved for implementation-defined server-errors.",
  },
};
