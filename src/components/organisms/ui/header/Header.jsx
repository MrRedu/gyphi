import ProTypes from 'prop-types'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { NavBar } from '@/components/molecules/nav-bar/NavBar'
export const Header = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.link}>
          <h1 className={styles.title}>GYPHI</h1>
        </Link>
        <NavBar />
      </header>
      <div className={styles['search-bar']}>{children}</div>
    </>
  )
}
Header.propTypes = {
  children: ProTypes.node.isRequired,
}
