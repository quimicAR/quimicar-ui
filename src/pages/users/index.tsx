import { Grid } from '@material-ui/core'
import { Layout } from 'components'
import { IUser } from 'models/user'
import { GetStaticProps, NextPage } from 'next'
import api from 'services'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id

  const { data } = await api.get('/users')

  return { props: { data } }
}

const Users: NextPage<{ data: IUser[] }> = ({ data }) => {
  return (
    <Layout>
      <Grid container>
        <h1>USERS</h1>
        <p>{data}</p>
      </Grid>
    </Layout>
  )
}

export default Users
