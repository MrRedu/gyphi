import ProTypes from 'prop-types'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
export const Header = ({ children }) => {
  return (
    <>
      <header className={styles['header']}>
        <Link to="/" className={styles['link']}>
          <h1 className={styles['title']}>GYPHI</h1>
        </Link>
      </header>
      {children}
    </>
  )
}
Header.propTypes = {
  children: ProTypes.node.isRequired,
}
