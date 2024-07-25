'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MetaMask, WagmiWeb3ConfigProvider, OkxWallet } from "@ant-design/web3-wagmi";
import { type ReactNode, useState } from 'react'
import { type State, WagmiProvider } from 'wagmi'

import { getConfig } from '@/wagmi'

// import { CounterStoreProvider } from './store-provider'

export function Providers(props: {
  children: ReactNode
  initialState?: State
}) {
  const [config] = useState(() => getConfig())
  const [queryClient] = useState(() => new QueryClient())

  return (
    <WagmiProvider config={config} initialState={props.initialState}>
      <WagmiWeb3ConfigProvider eip6963 config={config} wallets={[MetaMask(), OkxWallet()]}>
        <QueryClientProvider client={queryClient}>
          {/* <CounterStoreProvider> */}
          {props.children}
          {/* </CounterStoreProvider> */}
        </QueryClientProvider>
      </WagmiWeb3ConfigProvider>
    </WagmiProvider>
  )
}
