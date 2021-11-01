import { AxiosResponse } from 'axios'
import { IElement } from 'models/element'
import api from 'services'

interface UpdateElementProps {
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
  xpos: number
  ypos: number
}

export const updateElement = async ({
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
  symbol,
  xpos,
  ypos
}: UpdateElementProps): Promise<AxiosResponse<IElement>> => {
  return await api.put(`/elements/${number}`, {
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
    symbol,
    xpos,
    ypos,
    enabled: enabled as unknown as boolean
  })
}
