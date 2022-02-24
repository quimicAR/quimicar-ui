import { AxiosResponse } from 'axios'
import { IUser } from 'models/user'
import api from 'services'

interface GetUserByIdProps {
  id: string
}

export const getUserById = async ({
  id
}: GetUserByIdProps): Promise<AxiosResponse<IUser>> =>
  await api.get(`/users/${id}`)
