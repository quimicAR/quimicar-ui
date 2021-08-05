export interface IAtom {
  id: number
  name: string
  number: number
  atomic_mass: number
  appearance: string
  boil: number
  category: string
  density: number
  discovered_by: string | null
  melt: number
  molar_heat: number
  named_by: string
  period: number
  phase: string
  symbol: string
  source: string
  spectral_img: string
  summary: string
  xpos: number
  ypos: number
  shells: number[] // need to parse
  electron_configuration: string
  electron_configuration_semantic: string
  electron_affinity: number
  electronegativity_pauling: number
  ionization_energies: number[] // need to parse
}
