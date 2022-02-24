import { AxiosResponse } from 'axios'
import { IUser } from 'models/user'
import api from 'services'

interface UpdateUserProps {
  id: string
  fullName: string
  email: string
  password: string
  enabled: boolean
  role?: string
}

export const updateUser = async ({
  id,
  email,
  enabled,
  fullName,
  password,
  role
}: UpdateUserProps): Promise<AxiosResponse<IUser>> => {
  return await api.put(`/users/${id}`, {
    fullName,
    email,
    password,
    enabled: enabled as unknown as boolean,
    role: { name: role }
  })
}
