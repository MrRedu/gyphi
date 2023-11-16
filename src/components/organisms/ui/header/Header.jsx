import ProTypes from 'prop-types'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { LoginButton } from '@/components/molecules/login-button/LoginButton'
import { Nav } from '@/components/molecules/nav/Nav'
export const Header = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.link}>
          <h1 className={styles.title}>GYPHI</h1>
        </Link>
        {/* <LoginButton  /> */}
        <Nav />
      </header>
      {children}
    </>
  )
}
Header.propTypes = {
  children: ProTypes.node.isRequired,
}
