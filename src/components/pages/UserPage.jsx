import styles from './UserPage.module.css'

import { useState } from 'react'

import { useAuth0 } from '@auth0/auth0-react'
import { LayoutGrid, StretchHorizontal } from 'lucide-react'

import { rightChevron } from '@/libs/lucide'
import { useGif } from '@/hooks/useGifs'

import { LoginButton } from '@/components/molecules/login-button/LoginButton'
import { CardUser } from '@/components/molecules/card-user/CardUser'
import { Gif } from '@/components/atoms/gif/Gif'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'
import { Loader } from '@/components/atoms/loader/Loader'

const FavoriteGif = ({ id }) => {
  const { gif, loading } = useGif({ id })

  return (
    <>
      {loading && <Loader />}
      {gif && <Gif {...gif} />}
    </>
  )
}

export const UserPage = () => {
  const { user } = useAuth0()

  const myStorage = window.localStorage
  const myFavourites = JSON.parse(myStorage.getItem('favourites'))

  const [isGridLayout, setIsGridLayout] = useState(true)

  const handleIsGridLayout = () => {
    setIsGridLayout(true)
  }

  const handleIsStrechLayout = () => {
    setIsGridLayout(false)
  }

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
          <section className={styles.favourites}>
            <CategoryTitle>
              <CategoryTitle.Box>
                <CategoryTitle.Title>My Collections</CategoryTitle.Title>
              </CategoryTitle.Box>
              <CategoryTitle.Box>
                <CategoryTitle.Button
                  onClick={handleIsGridLayout}
                  isActive={isGridLayout}
                >
                  <LayoutGrid size={rightChevron.size} />
                </CategoryTitle.Button>
                <CategoryTitle.Button
                  onClick={handleIsStrechLayout}
                  isActive={!isGridLayout}
                >
                  <StretchHorizontal size={rightChevron.size} />
                </CategoryTitle.Button>
              </CategoryTitle.Box>
            </CategoryTitle>

            {/* Buscar si cambiar por el gifGrid */}
            <div
              style={
                isGridLayout
                  ? {
                      display: 'grid',
                      gridTemplateColumns:
                        'repeat(auto-fit, minmax(160px, 1fr))',
                    }
                  : {
                      display: 'grid',
                      gridTemplateColumns:
                        'repeat(auto-fit, minmax(100%, 1fr))',
                    }
              }
            >
              {myFavourites &&
                myFavourites.map(id => <FavoriteGif key={id} id={id} />)}
            </div>
          </section>
        </>
      )}
    </>
  )
}
