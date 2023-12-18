import proTypes from 'prop-types'
import styles from './FavouritesGifs.module.css'

import { Gif } from '@/components/atoms/gif/Gif'
import { Loader } from '@/components/atoms/loader/Loader'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'
import { useGif } from '@/hooks/useGifs'
import { rightChevron } from '@/libs/lucide'
import { StretchHorizontal, LayoutGrid } from 'lucide-react'
import { useState } from 'react'

const myStorage = window.localStorage
const myFavourites = JSON.parse(myStorage.getItem('favourites'))

const FavoriteGif = ({ id }) => {
  const { gif, loading } = useGif({ id })

  return (
    <>
      {loading && <Loader />}
      {gif && <Gif {...gif} />}
    </>
  )
}

export const FavouritesGifs = () => {
  const [isGridLayout, setIsGridLayout] = useState(true)

  const handleIsGridLayout = () => {
    setIsGridLayout(true)
  }

  const handleIsStrechLayout = () => {
    setIsGridLayout(false)
  }

  return (
    <>
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

        <div
          style={
            isGridLayout
              ? {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                }
              : {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(100%, 1fr))',
                }
          }
        >
          {myFavourites &&
            myFavourites.map(id => <FavoriteGif key={id} id={id} />)}
        </div>
      </section>
    </>
  )
}

FavoriteGif.propTypes = {
  id: proTypes.string,
}
