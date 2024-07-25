import { useConnect, useAccount, useSignMessage, useVerifyMessage } from 'wagmi'
import { injected } from '@wagmi/connectors'
import { useUserStore } from '@/store/userStore'


export default function SignLoginButton() {
    const [users, addUser] = useUserStore((state) => [
        state.users,
        state.addUser
    ])
    const { connect } = useConnect()
    const { chain, address } = useAccount()
    const { signMessage, signMessageAsync } = useSignMessage()
    const domain = {
        name: 'Ether Mail',
        version: '1',
        chainId: chain?.id,
    }
    const connector = injected({
        target() {
            return {
                id: 'OKX Wallet',
                name: 'OKX Wallet',
                provider: window.okxwallet,
            }
        },
    })
    const checkSignature = async (params: {
        address?: any;
        signature: any;
    }) => {
        try {
            const response = await fetch("/api/signatureCheck", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(params),
            });
            const result = await response.json();
            if (result.data) {
                alert("Signature success");
            } else {
                alert("Signature failed");
            }
        } catch (error) {
            alert("An error occurred");
        }
    };
    // 前端签名流程
    async function onClickHandler() {
        // 登录
        await connect({ connector })
        if (address) {
            // 获取签名数据
            addUser(address!)
            console.log(users[address!])
            const nonce = users[address!].nonce
            // const nonce = auth(account);
            const signature = await signMessageAsync({
                message: "test message for WTF-DApp demo",
            })
            checkSignature({ address, signature })
        }

    }
    return (
        <>
            <button className="px-8 mb-1 py-2 rounded-md bg-[#1e2124] flex flex-row items-center justify-center border border-[#1e2124] hover:border hover:border-indigo-600 shadow-md shadow-indigo-500/10" type="button" onClick={() => void onClickHandler()}>
                签名登录
            </button>
        </>
    )
}