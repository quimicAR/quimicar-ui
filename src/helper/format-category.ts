export const formatCategory = (atomCategory: string): Category => {
  switch (atomCategory) {
    case 'noble gas':
      return 'nobleGases'
    case 'alkali metal':
      return 'alkaliMetals'
    case 'alkaline earth metal':
      return 'alkalineEarthMetals'
    case 'post-transition metal':
      return 'postTransitionMetals'
    case 'transition metal':
      return 'transitionMetals'
    case 'lanthanide':
      return 'lanthanoids'
    case 'actinide':
      return 'actinoids'
    case 'polyatomic nonmetal':
      return 'nonMetal'
    case 'diatomic nonmetal':
      return 'nonMetal'
    default:
      return atomCategory as Category
  }
}

export type Category =
  | 'nobleGases'
  | 'alkaliMetals'
  | 'alkalineEarthMetals'
  | 'postTransitionMetals'
  | 'transitionMetals'
  | 'lanthanoids'
  | 'actinoids'
  | 'nonMetal'
