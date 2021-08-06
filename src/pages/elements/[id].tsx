import Layout from 'components/Layout/layout.component'
import { IAtom } from 'interfaces/atom'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetchElement = (id: string): Promise<IAtom> =>
  fetch(`https://quimicar-api.herokuapp.com/elements/${id}`).then((element) =>
    element.json()
  )

const ElementPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, error } = useSWR(`${id}`, fetchElement)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Layout>
      <h1>{data.name}</h1>
      <h2>{data.summary}</h2>
    </Layout>
  )
}
export default ElementPage
