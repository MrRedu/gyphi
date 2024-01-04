import { useAuth0 } from '@auth0/auth0-react'
import { LogIn, LogOut } from 'lucide-react'
import { Button } from '../button/Button'

export const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

  const handleLogIn = () => {
    loginWithRedirect()
  }

  const handleLogOut = () => {
    logout({ returnTo: window.location.origin })
  }

  return (
    <>
      {isAuthenticated ? (
        <Button
          preIcon={<LogOut size={20} strokeWidth={2} color="white" />}
          handleClick={handleLogOut}
          width="fit-content"
        />
      ) : (
        <Button
          preIcon={<LogIn size={20} strokeWidth={2} color="white" />}
          handleClick={handleLogIn}
          width="fit-content"
        />
      )}
    </>
  )
}
