import React from 'react';
import { SignTypedDataErrorType } from 'viem';
import { useAccount, useSignTypedData } from 'wagmi'
import { SignTypedDataVariables } from 'wagmi/query';

// 脚手架示例组件
const index: React.FC = () => {
    const { chain } = useAccount()
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

    const { signTypedData } = useSignTypedData()

    function sign() {
        signTypedData({
            domain,
            message,
            primaryType: 'Mail',
            types,
        },
            { 
                onSuccess: (data: any, variables: SignTypedDataVariables, context: any,) => {
                    console.log(data)
                    console.log(variables)
                    console.log(context)
                    alert('成功了！')
                },
                onError: () => {
                    alert('失败了！')
                }
            })
    }

    return (
        <button className="px-8 mb-1 py-2 rounded-md bg-[#1e2124] flex flex-row items-center justify-center border border-[#1e2124] hover:border hover:border-indigo-600 shadow-md shadow-indigo-500/10" onClick={sign}>签名</button>
    );
};

export default index;
