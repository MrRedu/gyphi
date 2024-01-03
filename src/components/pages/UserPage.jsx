import { useAuth0 } from '@auth0/auth0-react'

import { CardUser } from '@/components/molecules/card-user/CardUser'
import { FavouritesGifs } from '@/components/organisms/favourites-gifs/FavouritesGifs'

export const UserPage = () => {
  const { user } = useAuth0()

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
