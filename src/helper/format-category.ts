export const formatCategory = (atomCategory: string): string => {
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
      return atomCategory
  }
}

// noble gas
// alkali metal
// alkaline earth metal
// post-transition metal
// transition metal
// polyatomic nonmetal
// diatomic nonmetal
// lanthanide
// actinide
// metalloid
