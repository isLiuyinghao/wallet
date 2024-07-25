import React from "react";
import { ConnectButton, Connector } from "@ant-design/web3";
import { useSignMessage, useAccount } from "wagmi";
import { message, Space, Button } from "antd";

const SignDemo: React.FC = () => {
    const { signMessageAsync } = useSignMessage();
    const { address } = useAccount();
    const [signLoading, setSignLoading] = React.useState(false);

    const doSignature = async () => {
        setSignLoading(true);
        try {
            const signature = await signMessageAsync({
                message: "test message for WTF-DApp demo",
            });
            await checkSignature({
                address: address!,
                signature,
            });
        } catch (error: any) {
            message.error(`Signature failed: ${error.message}`);
        }
        setSignLoading(false);
    };

    const checkSignature = async (params: {
        address?: string;
        signature: string;
    }) => {
        try {
            const response = await fetch("/api/signatureCheck", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(params),
            });
            const result = await response.json();
            if (result.data) {
                message.success("Signature success");
            } else {
                message.error("Signature failed");
            }
        } catch (error) {
            message.error("An error occurred");
        }
    };

    return (
        <Space>
            <Connector>
                <ConnectButton />
            </Connector>
            <Button
                className="px-8 mb-1 py-2 rounded-md bg-[#1e2124] flex flex-row items-center justify-center border border-[#1e2124] hover:border hover:border-indigo-600 shadow-md shadow-indigo-500/10"
                loading={signLoading}
                disabled={!address}
                onClick={doSignature}
            >
                签名登录
            </Button>
        </Space>
    );
};
export default SignDemo;
