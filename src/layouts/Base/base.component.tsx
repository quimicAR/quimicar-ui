import { useState } from 'react'
import Admin from 'layouts/Admin/admin.component'
import User from 'layouts/User/user.component'

const Base: React.FC = ({ children }) => {
  const [auth, setAuth] = useState(true)

  return <>{auth ? <Admin>{children}</Admin> : <User>{children}</User>}</>
}

export default Base
