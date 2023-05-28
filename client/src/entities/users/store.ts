import { create } from 'zustand'
import { IUser } from 'shared/types'

interface UsersStoreState {
  allUsers: IUser[]
  setAllUsers: (allUsers: IUser[]) => void
}

export const useAllUsersStore = create<UsersStoreState>((set) => ({
  allUsers: [] as IUser[],
  setAllUsers: (users) =>
    set(() => ({
      allUsers: users,
    })),
}))
