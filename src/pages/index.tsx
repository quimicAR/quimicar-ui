import { GetStaticProps, NextPage } from 'next'
import { PeriodicTable } from '../components'
import { Base } from 'layouts'
import { IElement } from 'models/atom'
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

const Home: NextPage<{ data: IElement[] }> = ({ data }) => {
  return (
    <Base>
      <PeriodicTable size="md" elements={data} />
    </Base>
  )
}

export default Home
