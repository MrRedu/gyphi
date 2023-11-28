import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton } from '../molecules/login-button/LoginButton'

export const LoginPage = () => {
  const { isLoading, user } = useAuth0()

  return (
    <>
      <h1>{`</LoginPage>`}</h1>
      <LoginButton />
      {isLoading && <p>Loading ...</p>}
      {user && (
        <>
          <h3>{`Welcome ${user.name}!`}</h3>
          <p>{`Email: ${user.email}`}</p>
        </>
      )}
    </>
  )
}
