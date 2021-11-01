import { AxiosResponse } from 'axios'
import { IRole } from 'models/role'
import api from 'services'

interface GetRoleByIdProps {
  id: string
}

export const getRoleById = async ({
  id
}: GetRoleByIdProps): Promise<AxiosResponse<IRole>> =>
  await api.get(`/roles/${id}`)
