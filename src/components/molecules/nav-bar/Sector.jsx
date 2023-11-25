import ProTypes from 'prop-types'
import styles from './Sector.module.css'

export const Sector = ({ title, routes }) => {
  return (
    <>
      <div className={styles.sector}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.routes}>
          {routes.map(({ id, title }) => (
            <li key={id}>{title}</li>
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
