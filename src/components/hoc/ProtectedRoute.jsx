import propTypes from 'prop-types'

import { useAuth0 } from '@auth0/auth0-react'
import { LoginPage } from '@/components/pages'

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth0()

  if (!user) {
    return <LoginPage />
  }

  return <>{children}</>
}

ProtectedRoute.propTypes = {
  children: propTypes.node,
}
