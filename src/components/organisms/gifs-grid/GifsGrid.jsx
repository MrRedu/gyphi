import ProTypes from 'prop-types'

import styles from './GifsGrid.module.css'

import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'
import { Loader } from '@/components/atoms/loader/Loader'
import { copyToClipboard } from '@/libs/utils'
import { Link as LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

export const GifsGrid = ({ category, gifs, loading }) => {
  const handleCopy = text => {
    copyToClipboard(text)
  }

  return (
    <>
      <div className={styles.container}>
        <CategoryTitle text={category} />

        <div className={styles['gifs-container']}>
          {loading && <Loader />}
          {gifs &&
            gifs.map(({ url, title, id, image }) => {
              return (
                <div key={id} className={styles['gif-container']}>
                  <Link to={`/gifs/${id}`}>
                    <img
                      className={styles['gif-img']}
                      src={image}
                      alt={title}
                    />
                  </Link>
                  <button
                    className={styles['copy-btn']}
                    onClick={() => handleCopy(url)}
                  >
                    <LinkIcon size={20} />
                  </button>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

GifsGrid.propTypes = {
  category: ProTypes.string.isRequired,
  gifs: ProTypes.array.isRequired,
  loading: ProTypes.bool,
}
