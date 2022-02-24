import { AxiosResponse } from 'axios'
import api from 'services'

interface DeleteUserProps {
  id: string
}

export const deleteUser = async ({
  id
}: DeleteUserProps): Promise<AxiosResponse> => await api.delete(`/users/${id}`)
