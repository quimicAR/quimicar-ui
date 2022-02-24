import { GetStaticProps, NextPage } from 'next'
import { IElement } from '../models/element'
import { getAllElements } from '../services/elements/get-all'
import loadable from '@loadable/component'

const PeriodicTable = loadable(
  () => import('../components/PeriodicTable/periodic-table.component')
)

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getAllElements()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { data },
    revalidate: 2
  }
}

const Home: NextPage<{ data: IElement[] }> = ({ data }) => {
  return <PeriodicTable size="md" elements={data} />
}

export default Home
