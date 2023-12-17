import propTypes from 'prop-types'
import styles from './Gif.module.css'

import { Link as LinkIcon, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

import { copyToClipboard } from '@/libs/utils'
import { addIdGifToLocalStorage } from '@/libs/localStorage'

export const Gif = ({ url, title, id, image }) => {
  return (
    <div key={id} className={styles['gif-container']}>
      <Link to={`/gifs/${id}`}>
        <img className={styles['gif-img']} src={image} alt={title} />
      </Link>
      <div className={styles['actions-buttons']}>
        <button
          className={styles['add-favourite-btn']}
          onClick={() => addIdGifToLocalStorage(id)}
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
}

Gif.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
}
