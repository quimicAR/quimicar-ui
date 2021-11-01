import { IRole } from './role'

export interface IUser {
  id: string
  fullName: string
  email: string
  password: string
  enabled: boolean
  role: IRole
  token: string
}
