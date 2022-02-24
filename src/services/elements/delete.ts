import { AxiosResponse } from 'axios'
import api from 'services'

interface DeleteElementProps {
  atomicNumber: number
}

export const deleteElement = async ({
  atomicNumber
}: DeleteElementProps): Promise<AxiosResponse> =>
  await api.delete(`/elements/${atomicNumber}`)
