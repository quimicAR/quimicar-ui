/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useEffect, useState } from 'react'
import { recover, signIn } from '../services/auth'
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import api from 'services'

type User = {
  fullName: string
  email: string
  role: string
}

type AuthContextProps = {
  isAuthenticated: boolean
  setAuthenticated: ({ email, password }: AuthenticationProps) => Promise<void>
  isAdmin: boolean
  user: User | null
}

type AuthenticationProps = {
  email: string
  password: string
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const [user, setUser] = useState<User | null>(null)

  const setAuthenticated = async ({ email, password }: AuthenticationProps) => {
    try {
      const { data } = await signIn({
        email,
        password
      })
      setUser({
        email: data.email,
        fullName: data.fullName || data.email.split('@')[0],
        role: data.role
      })
      setIsAuthenticated(!!data.email)
      setIsAdmin(data.role === 'ROLE_ADMIN' || false)

      setCookie(undefined, 'quimicar.token', data.token, {
        maxAge: 60 * 60 * 1
      })

      api.defaults!.headers!['Authorization'] = `Bearer ${data.token}`

      Router.push('/')
    } catch (error) {
      Router.push('/login')
    }
  }

  useEffect(() => {
    const { 'quimicar.token': token } = parseCookies()
    console.log(token)
    if (token) {
      recover(token).then(({ data: { email, fullName, role } }) => {
        setUser({ email, fullName, role })
        setIsAuthenticated(!!email)
        setIsAdmin(role === 'ROLE_ADMIN' || false)
        api.defaults!.headers!['Authorization'] = `Bearer ${token}`
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setAuthenticated, user, isAdmin }}
    >
      {children}
    </AuthContext.Provider>
  )
}
