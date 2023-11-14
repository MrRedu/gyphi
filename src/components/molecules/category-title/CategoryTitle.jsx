import PropTypes from 'prop-types'
import styles from './CategoryTitle.module.css'
import { rightChevron } from '@/libs/lucide'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const CategoryTitle = ({ text, children }) => {
  return (
    <div className={styles['category-title']}>
      <Link to={`/category/${text}`} className={styles['title-link']}>
        {children}
        <h2 className={styles['title']}>{text}</h2>
      </Link>
      <Link to={`/category/${text}`} className={styles['see-all-link']}>
        <p className={styles['see-all-link']}>All the GIFs</p>
        <ChevronRight
          size={rightChevron.size}
          strokeWidth={rightChevron.strokeWidth}
        />
      </Link>
    </div>
  )
}

CategoryTitle.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
}
