import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from 'react'
import { IUser } from 'models/user'

interface IAuthContext {
  status?: 'error' | 'pending' | 'success'
  user: IUser | null
}

export const AuthContext = createContext<IAuthContext>({
  status: 'pending',
  user: null
})

export type Action = { type: string; label: string }

export const AuthProvider: React.FC = ({ children }) => {
  const authContext = useContext(AuthContext)
  // const [state, dispatch] = useReducer(reducer, authContext)
  // const value = { state, dispatch }
  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  )
}
