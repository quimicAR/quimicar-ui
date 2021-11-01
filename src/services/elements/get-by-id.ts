import { AxiosResponse } from 'axios'
import { IElement } from 'models/element'
import api from 'services'

interface GetElementByIdProps {
  id: string
}

export const getElementById = async ({
  id
}: GetElementByIdProps): Promise<AxiosResponse<IElement>> =>
  await api.get(`/elements/${id}`)
