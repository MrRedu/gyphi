import propTypes from 'prop-types'

import { useAuth0 } from '@auth0/auth0-react'

import { UserContext } from './UserContext'
// import { useState, useEffect } from 'react'

export const UserState = ({ children }) => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
    useAuth0()

  //   const [auth0User, setAuth0User] = useState()

  return (
    <UserContext.Provider
      value={{
        loginWithRedirect,
        logout,
        isAuthenticated,
        isLoading,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

UserState.propTypes = {
  children: propTypes.node,
}
