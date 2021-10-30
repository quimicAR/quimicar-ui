import { AxiosResponse } from 'axios'
import api from 'services'

interface DeleteElementProps {
  id: string
}

export const deleteElement = async ({
  id
}: DeleteElementProps): Promise<AxiosResponse> =>
  await api.delete(`/elements/${id}`)
