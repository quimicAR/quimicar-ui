import { IRole } from './role'

export interface IUser {
  id: string
  email: string
  password: string
  enabled: boolean
  role: IRole
}
