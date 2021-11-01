import { AxiosResponse } from 'axios'
import api from 'services'

interface DeleteRoleProps {
  id: string
}

export const deleteRole = async ({
  id
}: DeleteRoleProps): Promise<AxiosResponse> => await api.delete(`/roles/${id}`)
