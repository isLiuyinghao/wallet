import { create } from 'zustand'
import type { Address } from 'viem'

interface UserModule {
  address: Address,
  nonce: number,
}

interface BearState {
  count: number,
  users: {
    [key: Address]: UserModule
  },
  decrementCount: () => void
  incrementCount: () => void
  addUser: (address: Address) => void
  updateUser: (address: Address, nonce: number) => void
}

export const useUserStore = create<BearState>((set, get) => ({
  count: 0,
  users: {},
  addUser: (address: Address) => set((state) => {
    let user = state.users[address]
    if (!user) {
        user = {
            address,
            nonce: Math.floor(Math.random() * 10000000)
        }
        state.users[address] = user
    } else {
        const nonce = Math.floor(Math.random() * 10000000)
        user.nonce = nonce
        state.users[address] = user
    }
    return  { users: state.users }
  }),
  updateUser: (address: Address, nonce: number) => set((state) => {
    state.users[address].nonce = nonce
    return  { users: state.users }
  }),
  decrementCount: () => set((state) => ({ count: state.count - 1 })),
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
}))