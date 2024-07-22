// walletButton.tsx
"use client";
import { useAccount, useConnect, useBalance } from 'wagmi'
import SignButton from './signButton'
export default function WalletButton() {
    const { address ,isDisconnected } = useAccount()
    const { connectors, connect } = useConnect()
    const { data: balance } = useBalance()

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
                            <div className="text-xs md:text-xs">{address} <br /> Balance: { balance?.value }</div>
                        </div>
                    )
            }
            {connectors.map((connector) => (
                <button
                    key={connector.uid}
                    className="px-8 mb-1 py-2 rounded-md bg-[#1e2124] flex flex-row items-center justify-center border border-[#1e2124] hover:border hover:border-indigo-600 shadow-md shadow-indigo-500/10"
                    onClick={() => connect({ connector })}
                    type="button"
                >
                    { connector.icon ? <img src={ connector.icon  } alt="MetaMask Fox" style={{ width: "25px", height: "25px" }} /> : ''}
                    
                    {connector.name}
                </button>
            ))}
            <SignButton/>
        </>);
}
