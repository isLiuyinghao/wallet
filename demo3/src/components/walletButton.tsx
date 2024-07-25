// walletButton.tsx
"use client";
import { useAccount, useConnect, useBalance } from 'wagmi'
import SignButton from './signButton'
import SignLoginButton from './signLoginButton'
import SingDemo from './singDemo'

export default function WalletButton() {


    const { address, isDisconnected } = useAccount()
    const { connectors, connect } = useConnect()
    const { data: balance } = useBalance()
    // console.log(connectors)
    // connectors.forEach(item => console.log(item))
    return (
        <>
            {
                isDisconnected ? (
                    <div className="flex items-center">
                        <div className="border bg-red-600 border-red-600 rounded-full w-1.5 h-1.5 mr-2">
                        </div>
                        <div>Disconnected</div>
                    </div>)

                    : (
                        <div className="flex items-center w-full">
                            <div className="border bg-green-500 border-green-500 rounded-full w-1.5 h-1.5 mr-2"></div>
                            <div className="text-xs md:text-xs">{address} <br /> Balance: {balance?.value}</div>
                        </div>
                    )
            }
            <SignButton />
            <SignLoginButton  /> 
            <SingDemo/>
        </>);
}
