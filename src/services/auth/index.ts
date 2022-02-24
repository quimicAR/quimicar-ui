import { AxiosResponse } from 'axios'
import api from '../../services'

type SignInProps = {
  email: string
  password: string
}

type SignInResponse = {
  fullName: string
  email: string
  token: string
  enabled: boolean
  role: string
}

export const signIn = async ({
  email,
  password
}: SignInProps): Promise<AxiosResponse<SignInResponse>> =>
  await api.post('/login', {
    email,
    password
  })

export const recover = async (
  token: string
): Promise<AxiosResponse<SignInResponse>> => await api.post(`/recover/${token}`)
