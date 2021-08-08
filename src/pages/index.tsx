import { GetStaticProps, NextPage } from 'next'
import { Layout, PeriodicTable } from '../components'
import { IAtom } from 'models/atom'
import { fetcher } from 'services/'

export const getStaticProps: GetStaticProps = async () => {
  const elements = await fetcher('/elements')

  if (!elements) {
    return {
      notFound: true
    }
  }

  return {
    props: { elements }
  }
}

const Home: NextPage<{ elements: IAtom[] }> = ({ elements }) => {
  return (
    <Layout>
      <PeriodicTable elements={elements} />
    </Layout>
  )
}

export default Home
