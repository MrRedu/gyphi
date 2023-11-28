import ProTypes from 'prop-types'
import styles from './Sector.module.css'
import { Link } from 'react-router-dom'

export const Sector = ({ title, routes }) => {
  return (
    <>
      <div className={styles.sector}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.routes}>
          {routes.map(({ id, title, route }) => (
            <Link key={id} to={route}>
              <li>{title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  )
}

Sector.propTypes = {
  title: ProTypes.string.isRequired,
  routes: ProTypes.array.isRequired,
}
