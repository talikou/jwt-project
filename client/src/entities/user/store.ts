import { create } from 'zustand'
import { IUser } from 'shared/types'

interface UserStoreState {
  user: IUser
  setUser: (user: IUser) => void
}

export const useUserStore = create<UserStoreState>((set) => ({
  user: {} as IUser,
  setUser: (user) =>
    set(() => ({
      user,
    })),
}))
