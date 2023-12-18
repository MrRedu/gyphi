import { useAuth0 } from '@auth0/auth0-react'

import { LoginButton } from '@/components/molecules/login-button/LoginButton'
import { CardUser } from '@/components/molecules/card-user/CardUser'
import { FavouritesGifs } from '@/components/organisms/favourites-gifs/FavouritesGifs'

export const UserPage = () => {
  const { user } = useAuth0()

  if (!user) {
    return (
      <>
        <LoginButton />
        <h2>Esto debería ser un login obligatorio</h2>
        <p>O directamente hacer una ruta inaccesible sin user</p>
      </>
    )
  }

  return (
    <>
      {user && (
        <>
          <CardUser {...user} />
          <FavouritesGifs />
        </>
      )}
    </>
  )
}
