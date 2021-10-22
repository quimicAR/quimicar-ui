import { Base } from 'layouts'
import { IUser } from 'models/user'
import { GetStaticProps, NextPage } from 'next'
import api from 'services'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id

  const { data } = await api.get('/users', {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyRGV0YWlscyI6IntcImlkXCI6bnVsbCxcImVtYWlsXCI6XCJhZG1pbkBlbWFpbC5jb21cIixcInBhc3N3b3JkXCI6bnVsbCxcImVuYWJsZWRcIjpmYWxzZSxcInRva2VuXCI6bnVsbCxcInJvbGVcIjp7XCJyb2xlX2lkXCI6bnVsbCxcIm5hbWVcIjpcIlJPTEVfQURNSU5cIn19IiwiaXNzIjoiYnIuY29tLnF1aW1pY2FyIiwic3ViIjoiYWRtaW5AZW1haWwuY29tIiwiZXhwIjoxNjM0Nzg2NzE1fQ.kKCsmqdVVK7zz7w1QfIM1yyO2zxNTkF7kiR6stJX9fSlwmMoCX0O1faSR1KiGPcml-yqlvb_yDgBBJXMOzfNaQ`
    }
  })

  return { props: { data } }
}

const Users: NextPage<{ data: IUser[] }> = ({ data }) => {
  return (
    <Base>
      <h1>USERS</h1>
      <p>{data.map((user) => user.email)}</p>
    </Base>
  )
}

export default Users
