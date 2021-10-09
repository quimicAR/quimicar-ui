import { GetStaticProps, NextPage } from 'next'
import { Layout, PeriodicTable } from '../components'
import { IAtom } from 'models/atom'
import api from 'services/'

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/elements')

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { data }
  }
}

const Home: NextPage<{ data: IAtom[] }> = ({ data }) => {
  return (
    <Layout>
      <PeriodicTable elements={data} />
    </Layout>
  )
}

export default Home
