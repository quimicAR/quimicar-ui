import { AxiosResponse } from 'axios'
import api from 'services'

interface UpdateRoleProps {
  id: string
  name: string
}

export const updateRole = async ({
  id,
  name
}: UpdateRoleProps): Promise<AxiosResponse> =>
  await api.put(`/roles/${id}`, { name })
