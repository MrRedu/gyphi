import proTypes from 'prop-types'
import styles from './FavouritesGifs.module.css'

import { Gif } from '@/components/atoms/gif/Gif'
import { Loader } from '@/components/atoms/loader/Loader'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'
import { useGif } from '@/hooks/useGifs'
import { rightChevron } from '@/libs/lucide'
import { StretchHorizontal, LayoutGrid } from 'lucide-react'
import { useState } from 'react'
import { NoStringFound } from '@/components/molecules/no-string-found/NoStringFound'

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

  const handleIsStretchLayout = () => {
    setIsGridLayout(false)
  }

  return (
    <>
      <section className={styles.container}>
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
              onClick={handleIsStretchLayout}
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
                  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                }
              : {
                  gridTemplateColumns: 'repeat(auto-fit, minmax(100%, 1fr))',
                }
          }
          className={styles['gifs-container']}
        >
          {myFavourites.length > 0 ? (
            myFavourites.map(id => <FavoriteGif key={id} id={id} />)
          ) : (
            <NoStringFound>
              <NoStringFound.PrincipalText>
                No favourites GIFs added yet
              </NoStringFound.PrincipalText>
              <NoStringFound.SecondaryText>
                Add some to your collection
              </NoStringFound.SecondaryText>
            </NoStringFound>
          )}
        </div>
      </section>
    </>
  )
}

FavoriteGif.propTypes = {
  id: proTypes.string,
}
