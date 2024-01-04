import styles from './FavouritesGifs.module.css'

import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'
import { rightChevron } from '@/libs/lucide'
import { StretchHorizontal, LayoutGrid } from 'lucide-react'
import { useState } from 'react'
import { NoStringFound } from '@/components/molecules/no-string-found/NoStringFound'
import { FavoriteGif } from '@/components/molecules/favorite-gif/FavoriteGif'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useEffect } from 'react'

export const FavouritesGifs = () => {
  const [isGridLayout, setIsGridLayout] = useState(true)
  const handleIsGridLayout = () => {
    setIsGridLayout(true)
  }
  const handleIsStretchLayout = () => {
    setIsGridLayout(false)
  }

  const [favouriteGifs] = useLocalStorage({
    key: 'favourites',
    initialValue: [],
  })

  // useEffect(() => {
  //   console.log(favouriteGifs)
  // }, [favouriteGifs])

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
          {favouriteGifs.length > 0 ? (
            favouriteGifs.map(id => <FavoriteGif key={id} id={id} />)
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
