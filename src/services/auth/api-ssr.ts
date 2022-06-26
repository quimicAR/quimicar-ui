import axios from 'axios'
import { parseCookies } from 'nookies'

export default function getAPIClient(ctx?: any) {
  const { 'quimicar.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: `${
      process.env.NEXT_PUBLIC_BASE_URL_PROD
      // process.env.NEXT_PUBLIC_BASE_URL_DEV
    }`
  })

  if (token) {
    api.defaults!.headers!['Authorization'] = `Bearer ${token}`
  }

  return api
}
