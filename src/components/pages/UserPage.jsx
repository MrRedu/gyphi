import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton } from '../molecules/login-button/LoginButton'
import { CardUser } from '../molecules/card-user/CardUser'

export const UserPage = () => {
  const { user } = useAuth0()

  return (
    <>
      {user && <CardUser {...user} />}
      <LoginButton />
    </>
  )
}
