import propTypes from 'prop-types'
import styles from './Gif.module.css'

import { Link as LinkIcon, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

import { copyToClipboard } from '@/libs/utils'
import { useAuth0 } from '@auth0/auth0-react'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export const Gif = ({ url, title, id, image, className }) => {
  const { user } = useAuth0()
  const [favouriteGifs, setFavouriteGifs] = useLocalStorage({
    key: 'favourites',
    initialValue: [],
  })

  const isFavourite = favouriteGifs.includes(id)

  return (
    <div key={id} className={`${styles['gif-container']} ${className}`}>
      <Link to={`/gifs/${id}`}>
        <img className={styles['gif-img']} src={image} alt={title} />
      </Link>
      <div className={styles['actions-buttons']}>
        {user && (
          <button
            type="button"
            className={styles['add-favourite-btn']}
            onClick={() => setFavouriteGifs(id)}
          >
            <Heart size={20} fill={isFavourite ? 'red' : 'transparent'} />
          </button>
        )}
        <button
          type="button"
          className={styles['copy-btn']}
          onClick={() => copyToClipboard(url)}
        >
          <LinkIcon size={20} />
        </button>
      </div>
    </div>
  )
}

Gif.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  className: propTypes.string,
  handleAddFavourite: propTypes.func,
}
