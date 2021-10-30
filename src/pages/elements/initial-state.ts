import * as yup from 'yup'

export interface FormData {
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

export const schema = yup.object({
  name: yup
    .string()
    .min(3, 'Minimun of 3 characters!')
    .required('Element name is required!'),
  number: yup.number().required('Please, provide the atomic number'),
  atomic_mass: yup.number().required('Atomic Mass is required'),
  summary: yup.string().nullable(),
  appearance: yup.string().nullable(),
  boil: yup.number().nullable(),
  category: yup.string(),
  density: yup.number().nullable(),
  melt: yup.number().nullable(),
  molar_heat: yup.number().nullable(),
  discovered_by: yup.string().nullable(),
  named_by: yup.string().nullable(),
  period: yup.number().nullable(),
  phase: yup.string().nullable(),
  symbol: yup.string().nullable(),
  source: yup.string().nullable(),
  spectral_img: yup.string().nullable(),
  electron_configuration: yup.string().nullable(),
  electron_configuration_semantic: yup.string().nullable(),
  electron_affinity: yup.number().nullable(),
  element_img: yup.string().nullable(),
  enabled: yup.bool()
})

export const headers = [
  {
    id: 'number',
    title: 'Atomic Number'
  },
  {
    id: 'symbol',
    title: 'Symbol'
  },
  {
    id: 'name',
    title: 'Name'
  },
  {
    id: 'atomic_mass',
    title: 'Atomic Mass'
  },
  {
    id: 'enabled',
    title: 'Enabled'
  },
  {
    id: 'actions',
    title: 'Actions'
  }
]
