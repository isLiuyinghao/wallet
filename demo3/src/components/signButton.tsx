import React from 'react';
import { useAccount, useSignTypedData } from 'wagmi'
import { SignTypedDataVariables } from 'wagmi/query';

// 脚手架示例组件
export default function SignButton() {
    const { chain } = useAccount()
    const { signTypedData } = useSignTypedData()
    const domain = {
        name: 'Ether Mail',
        version: '1',
        chainId: chain?.id,
        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
    } as const

    const types = {
        Person: [
            { name: 'name', type: 'string' },
            { name: 'wallet', type: 'address' },
        ],
        Mail: [
            { name: 'from', type: 'Person' },
            { name: 'to', type: 'Person' },
            { name: 'contents', type: 'string' },
        ],
    } as const

    const message = {
        from: {
            name: 'Cow',
            wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
        },
        to: {
            name: 'Bob',
            wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
        },
        contents: 'Hello, Bob!',
    } as const


    async function sign() {
        const result = await signTypedData({
            domain,
            message,
            primaryType: 'Mail',
            types,
        })

        console.log(result)
    }

    return (
        <button className="px-8 mb-1 py-2 rounded-md bg-[#1e2124] flex flex-row items-center justify-center border border-[#1e2124] hover:border hover:border-indigo-600 shadow-md shadow-indigo-500/10" onClick={sign}>签名</button>
    );
};

