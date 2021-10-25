import { isUndefined } from 'lodash'
import api from 'services'

interface GetAllUsersProps {
  email?: string
  role?: string
}

export const getAllUsers = async ({ email, role }: GetAllUsersProps) => {
  let query = ''

  if (!isUndefined(email) || !isUndefined(role))
    query = `?email=${email}&role=${role}`

  return await api.get(`/users${query}`)
}
