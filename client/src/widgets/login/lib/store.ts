import { create } from 'zustand'
import { IUser } from 'shared/types'

interface LoginStoreState {
  user: IUser
  setUser: (user: IUser) => void
}

export const useLoginStore = create<LoginStoreState>((set) => ({
  user: {} as IUser,
  setUser: (user) =>
    set(() => ({
      user,
    })),
}))
