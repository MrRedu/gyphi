import ProTypes from 'prop-types'
import styles from './Sector.module.css'
import { Link } from 'react-router-dom'

export const Sector = ({ title, routes }) => {
  return (
    <>
      <div className={styles.sector}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.routes}>
          {routes.map(({ id, title, path }) => (
            <Link key={id} to={path}>
              {title}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

Sector.propTypes = {
  title: ProTypes.string.isRequired,
  routes: ProTypes.array.isRequired,
}
