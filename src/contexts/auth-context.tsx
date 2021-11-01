/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useEffect, useState } from 'react'
import { recover, signIn } from '../services/auth'
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import api from '../services'
import Swal from 'sweetalert2'
import { isUndefined } from 'lodash'

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
      const response = await signIn({
        email,
        password
      })
      const { data } = response

      if (response.status === 201) {
        setUser({
          email: data.email,
          fullName: data.fullName || data.email.split('@')[0],
          role: data.role
        })
        setIsAuthenticated(!!data.email)
        setIsAdmin(data.role === 'ROLE_ADMIN' || false)
        setCookie(undefined, 'quimicar.token', data.token, {
          maxAge: 60 * 60 * 1 // 1 hora
        })
        api.defaults!.headers!['Authorization'] = `Bearer ${data.token}`
        Swal.fire('Success!', 'Logged in!', 'success')
        Router.push('/')
      }
    } catch (error: any) {
      Swal.fire(
        'Error',
        `Error to login! <br> ${error.response.data.message}`,
        'error'
      )
      Router.push('/login')
    }
  }

  useEffect(() => {
    const { 'quimicar.token': token } = parseCookies()

    if (!isUndefined(token)) {
      console.log('Token encontrado -> ', token)
      recover(token).then(({ data: { email, fullName, role } }) => {
        console.log('Recovering User -> ', { email, fullName, role })
        setUser({ email, fullName: fullName || email.split('@')[0], role })
        setIsAuthenticated(!!email)
        setIsAdmin(role === 'ROLE_ADMIN' || false)
        api.defaults!.headers!['Authorization'] = `Bearer ${token}`
      })
    } else Router.push('/')
  }, [])

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setAuthenticated, user, isAdmin }}
    >
      {children}
    </AuthContext.Provider>
  )
}
