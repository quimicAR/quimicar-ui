import { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/auth-context'
import loadable from '@loadable/component'

const Admin = loadable(() => import('../Admin/admin.component'))
const User = loadable(() => import('../User/user.component'))

const Base: React.FC = ({ children }) => {
  const { isAdmin } = useContext(AuthContext)

  useEffect(() => {}, [isAdmin])

  return <>{isAdmin ? <Admin>{children}</Admin> : <User>{children}</User>}</>
}

export default Base
