import { AxiosResponse } from 'axios'
import { IUser } from 'models/user'
import api from 'services'

interface CreateElementProps {
  number: number
  name: string
  atomic_mass: number
  appearance: string
  boil: number
  category: string
  density: number
  melt: number
  molar_heat: number
  discovered_by: string | null
  named_by: string | null
  period: number
  phase: string
  symbol: string
  source: string | null
  spectral_img: string | null
  summary: string | null
  electron_configuration: string
  electron_configuration_semantic: string
  electron_affinity: number
  element_img: string
  enabled: boolean
}

export const createElement = async ({
  appearance,
  atomic_mass,
  boil,
  category,
  density,
  discovered_by,
  electron_affinity,
  electron_configuration,
  electron_configuration_semantic,
  element_img,
  enabled,
  melt,
  molar_heat,
  name,
  named_by,
  number,
  period,
  phase,
  source,
  spectral_img,
  summary,
  symbol
}: CreateElementProps): Promise<AxiosResponse<IUser>> =>
  api.post('/elements', {
    appearance,
    atomic_mass,
    boil,
    category,
    density,
    discovered_by,
    electron_affinity,
    electron_configuration,
    electron_configuration_semantic,
    element_img,
    enabled,
    melt,
    molar_heat,
    name,
    named_by,
    number,
    period,
    phase,
    source,
    spectral_img,
    summary,
    symbol
  })
