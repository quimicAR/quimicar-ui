import { AxiosResponse } from 'axios'
import { IUser } from 'models/user'
import api from 'services'

interface CreateUserProps {
  fullName: string
  email: string
  password: string
  enabled: boolean
  role?: string
}

export const createUser = async ({
  email,
  enabled,
  fullName,
  password,
  role
}: CreateUserProps): Promise<AxiosResponse<IUser>> => {
  return await api.post('/register', {
    fullName,
    email,
    password,
    enabled: enabled as unknown as boolean,
    role
  })
}
