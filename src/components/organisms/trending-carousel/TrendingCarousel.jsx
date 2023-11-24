import { useRef } from 'react'
import { useTrending } from '@/hooks/useTrending'

import styles from './TrendingCarousel.module.css'

import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'
import { ChevronRight, ChevronLeft, Link as LinkIcon } from 'lucide-react'
import { Loader } from '@/components/atoms/loader/Loader'
import { copyToClipboard } from '@/libs/utils'
import { Link } from 'react-router-dom'

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
        <CategoryTitle text={'Trending'}>
          <img src="/svg/trending.svg" alt="Trending" />
        </CategoryTitle>

        <div className={styles['slider-wrapper']}>
          <button
            className={`${styles['button-slider']} ${styles.left}`}
            onClick={handleClickLeft}
          >
            <ChevronLeft color="white" />
          </button>
          <button
            className={`${styles['button-slider']} ${styles.right}`}
            onClick={handleClickRight}
          >
            <ChevronRight color="white" />
          </button>

          <div className={styles['gifs-container']} ref={containerRef}>
            {loading && <Loader />}
            {trending &&
              trending.map(({ id, image, title, url }) => (
                <div key={id} className={styles['trending-gif']}>
                  <Link to={`/gifs/${id}`}>
                    <img
                      className={styles['gif-img']}
                      src={image}
                      alt={title}
                    />
                  </Link>
                  <button
                    className={styles['copy-btn']}
                    onClick={() => copyToClipboard(url)}
                  >
                    <LinkIcon size={20} />
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
