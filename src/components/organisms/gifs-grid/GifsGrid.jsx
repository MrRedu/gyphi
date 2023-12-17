import ProTypes from 'prop-types'

import styles from './GifsGrid.module.css'

import { CategoryTitle } from '@/components/molecules/category-title/CategoryTitle'
import { Loader } from '@/components/atoms/loader/Loader'
import { copyToClipboard } from '@/libs/utils'
import { Link as LinkIcon, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export const GifsGrid = ({ category, gifs, loading }) => {
  const myStorage = window.localStorage

  const handleAddFavourite = ({ id }) => {
    const favourite = id
    const favouritesGifs = JSON.parse(myStorage.getItem('favourites'))

    if (myStorage.length === 0) {
      myStorage.setItem('favourites', JSON.stringify([favourite]))
    } else {
      if (favouritesGifs.includes(favourite)) {
        const filteredGifs = favouritesGifs.filter(gif => gif !== favourite)
        myStorage.setItem('favourites', JSON.stringify(filteredGifs))
      } else {
        favouritesGifs.push(favourite)
        myStorage.setItem('favourites', JSON.stringify(favouritesGifs))
      }
    }
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
                  <div className={styles['actions-buttons']}>
                    <button
                      className={styles['add-favourite-btn']}
                      onClick={() => handleAddFavourite({ id })}
                    >
                      <Heart size={20} />
                    </button>
                    <button
                      className={styles['copy-btn']}
                      onClick={() => copyToClipboard(url)}
                    >
                      <LinkIcon size={20} />
                    </button>
                  </div>
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
