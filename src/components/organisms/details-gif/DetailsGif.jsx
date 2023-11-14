import { Loader } from '@/components/atoms/loader/Loader'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import styles from './DetailsGif.module.css'

import { DetailsUser } from '@/components/molecules/details-user/DetailsUser'
import { Info, XCircle } from 'lucide-react'
import { useDetailsGifs } from '@/hooks/useDetailsGifs'
import { StatsGif } from '@/components/molecules/stats-gif/StatsGif'

export const DetailsGif = () => {
  let { id } = useParams()
  const { gif, loading } = useDetailsGifs({ id })

  const [isOpenDetails, setIsOpenDetails] = useState(false)
  const handleClick = () => {
    setIsOpenDetails(!isOpenDetails)
  }

  return (
    <>
      {loading && <Loader />}
      {gif && (
        <section className={styles['container']}>
          <aside className={styles['aside']}>
            <DetailsUser user={gif.user} />
          </aside>
          <article className={styles['gif-container']}>
            <header className={styles['gif-header']}>
              <h2 className={styles['gif-title']}>{gif.title}</h2>
              <button
                type="button"
                onClick={handleClick}
                className={styles['details-gif']}
              >
                {isOpenDetails ? (
                  <XCircle size={18} strokeWidth={2} color="white" />
                ) : (
                  <Info size={18} strokeWidth={2} color="white" />
                )}
              </button>
            </header>
            <div className={styles['gif-container']}>
              {isOpenDetails && <StatsGif details={gif.details} />}
              <img
                className={styles['gif-image']}
                src={gif.image}
                alt={gif.title}
              />
            </div>
          </article>
        </section>
      )}
    </>
  )
}
