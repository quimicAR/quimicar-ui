import Main from 'components/Main/main.component'
import { IAtom } from 'interfaces/atom'
import { GetStaticProps, NextPage } from 'next'
import { ThemeProvider } from '../hooks/use-theme'

const Home: NextPage<{ elements: IAtom[] }> = ({ elements }) => {
  return (
    <ThemeProvider>
      <Main elements={elements} />
    </ThemeProvider>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`https://quimicar-api.herokuapp.com/elements`)
  const data: IAtom = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { elements: data }
  }
}

export default Home
