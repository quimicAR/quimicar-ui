import { GetStaticProps, NextPage } from 'next'
import { PeriodicTable } from '../components'
import { IElement } from '../models/element'
import { getAllElements } from '../services/elements/get-all'

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getAllElements()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { data },
    revalidate: 1
  }
}

const Home: NextPage<{ data: IElement[] }> = ({ data }) => {
  return <PeriodicTable size="md" elements={data} />
}

export default Home
