import { useContext, useEffect } from 'react'
import Admin from 'layouts/Admin/admin.component'
import User from 'layouts/User/user.component'
import { AuthContext } from 'contexts/auth-context'

const Base: React.FC = ({ children }) => {
  const { isAdmin } = useContext(AuthContext)

  useEffect(() => {}, [isAdmin])

  return <>{isAdmin ? <Admin>{children}</Admin> : <User>{children}</User>}</>
}

export default Base
