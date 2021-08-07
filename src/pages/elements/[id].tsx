import { Layout } from 'components'
import { IAtom } from 'interfaces/atom'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { fetcher } from 'services'

export const getStaticPaths: GetStaticPaths = async () => {
  let size = Array.from(Array(119).keys())
  size = size.map((size) => size + 1)

  const paths = size.map((id) => ({
    params: { id: id.toString() }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id

  const element = await fetcher('/elements/' + id)

  return { props: { element } }
}

const Element: NextPage<{ element: IAtom }> = ({ element }) => {
  return (
    <Layout>
      <section>
        <h1>{element.name}</h1>
        <p>{element.summary}</p>
      </section>
    </Layout>
  )
}

export default Element
