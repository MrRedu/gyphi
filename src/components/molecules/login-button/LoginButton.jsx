import { useAuth0 } from '@auth0/auth0-react'
import { LogIn } from 'lucide-react'
import { Button } from '../button/Button'

export const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

  const handleLogin = () => {
    loginWithRedirect()
  }

  const handleLogout = () => {
    logout({ returnTo: window.location.origin })
  }

  return (
    <>
      {isAuthenticated ? (
        <Button
          preIcon={<LogIn size={20} strokeWidth={2} color="white" />}
          handleClick={handleLogout}
        >
          Log Out
        </Button>
      ) : (
        <Button
          preIcon={<LogIn size={20} strokeWidth={2} color="white" />}
          handleClick={handleLogin}
        >
          Log In
        </Button>
      )}
    </>
  )
}
