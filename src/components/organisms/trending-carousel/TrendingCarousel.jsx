import { useRef } from 'react'
import { useTrending } from '@/hooks/useTrending'

import styles from './TrendingCarousel.module.css'

import { ChevronRight, ChevronLeft } from 'lucide-react'
import { Loader } from '@/components/atoms/loader/Loader'
import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'
import { Gif } from '@/components/atoms/gif/Gif'

export const TrendingCarousel = () => {
  const { trending, loading } = useTrending()

  const containerRef = useRef(null)

  const handleClickRight = () => {
    containerRef.current.scrollBy(500, 0)
  }
  const handleClickLeft = () => {
    containerRef.current.scrollBy(-500, 0)
  }

  return (
    <>
      <div className={styles.container}>
        <CategoryTitle>
          <CategoryTitle.Box>
            <img src="/svg/trending.svg" alt="Trending" />
            <CategoryTitle.Title>Trending</CategoryTitle.Title>
          </CategoryTitle.Box>
        </CategoryTitle>

        <div className={styles['slider-wrapper']}>
          <button
            className={`${styles['button-slider']} ${styles.left}`}
            onClick={handleClickLeft}
          >
            <ChevronLeft color="var(--c-whywhite-300)" />
          </button>
          <button
            className={`${styles['button-slider']} ${styles.right}`}
            onClick={handleClickRight}
          >
            <ChevronRight color="var(--c-whywhite-300)" />
          </button>

          <div className={styles['gifs-container']} ref={containerRef}>
            {loading && <Loader />}
            {trending &&
              trending.map(({ id, image, title, url }) => (
                <Gif
                  key={id}
                  url={url}
                  title={title}
                  id={id}
                  image={image}
                  className={styles['trending-gif']}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
