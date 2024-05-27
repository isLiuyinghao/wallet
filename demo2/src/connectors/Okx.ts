import { Connector } from "wagmi"

export class OkxConnector implements Connector {
    // 要验证浏览器是否在运行欧易 Web3 钱包
    getProvider() {
        // if (typeof window.okxwallet !== 'undefined') {console.log('OKX is installed!');}
        if (typeof window === 'undefined') return
        // 要验证浏览器是否在运行欧易 Web3 钱包
        if (typeof window.okxwallet.bitcoin === 'undefined') {
            throw new ConnectorNotFoundError()
        }

        return window.okxwallet.bitcoin
    }
    // 链接
    async connect() {
        try {
          const provider = this.getProvider()
    
          if (provider.on) {
            provider.on(
              'connect',
              async ({ address, compressedPublicKey }: { address: string; compressedPublicKey: string }) => {
                if (address && compressedPublicKey) {
                  this.onAccountsChanged(address, compressedPublicKey)
                }
              },
            )
            provider.on('disconnect', async () => {
              provider.removeAllListeners()
              this.onDisconnect()
            })
          }
    
          const { address, compressedPublicKey }: { address: string; compressedPublicKey: string } =
            await provider.connect()
    
          return { address, publicKey: compressedPublicKey, network: 'livenet' as Network }
        } catch (error) {
          console.log('connnector error: ', error)
          throw error
        }
      }
}