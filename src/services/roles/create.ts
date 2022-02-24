import { AxiosResponse } from 'axios'
import { IRole } from 'models/role'
import api from 'services'

interface CreateRoleProps {
  name: string
}

export const createRole = async ({
  name
}: CreateRoleProps): Promise<AxiosResponse<IRole>> =>
  await api.post('/roles', { name })
