import PropTypes from 'prop-types'
import styles from './StatsGif.module.css'

export const StatsGif = ({ details }) => {
  const date = new Date(details.uploaded)
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className={styles['gif-details']}>
      <span className={styles['gif-details-stat']}>
        Source: {details.width}x{details.height}px
      </span>
      <span className={styles['gif-details-stat']}>Size: 👀</span>
      <span className={styles['gif-details-stat']}>
        Frames: {details.frames}
      </span>
      <span className={styles['gif-details-stat']}>
        Uploaded: {formattedDate}
      </span>
      <span className={styles['gif-details-stat']}>
        Rating: {details.rating}
      </span>
    </div>
  )
}

StatsGif.propTypes = {
  details: PropTypes.object,
}
