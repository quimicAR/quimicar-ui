import { AxiosResponse } from 'axios'
import { IRole } from 'models/role'
import api from 'services'

export const getAllRoles = async (): Promise<AxiosResponse<IRole[]>> =>
  await api.get('/roles')
