/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios from 'axios'
import { parseCookies } from 'nookies'

export default function getAPIClient(ctx?: any) {
  const { 'quimicar.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL_PROD}`
  })

  if (token) {
    api.defaults!.headers!['Authorization'] = `Bearer ${token}`
  }

  return api
}
