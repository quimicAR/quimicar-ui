import { AxiosResponse } from 'axios'
import { isUndefined } from 'lodash'
import { IUser } from 'models/user'
import api from 'services'

interface GetAllUsersProps {
  email?: string
  role?: string
}

export const getAllUsers = async ({
  email,
  role
}: GetAllUsersProps): Promise<AxiosResponse<IUser[]>> => {
  let query = ''

  if (!isUndefined(email) || !isUndefined(role))
    query = `?email=${email}&role=${role}`

  return await api.get(`/users${query}`)
}
