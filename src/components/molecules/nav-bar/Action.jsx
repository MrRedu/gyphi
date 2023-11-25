import ProTypes from 'prop-types'

import styles from './Action.module.css'

export const Action = ({ icon, isOpen, onClick, children }) => {
  return (
    <div onClick={onClick} className={styles.action}>
      <button type="button">{icon}</button>
      <div
        className={`${styles['action-dropdown']} ${
          isOpen ? styles['is-open'] : ''
        }`}
      >
        {children}
      </div>
    </div>
  )
}

Action.propTypes = {
  id: ProTypes.string.isRequired,
  icon: ProTypes.node.isRequired,
  isOpen: ProTypes.bool.isRequired,
  onClick: ProTypes.func.isRequired,
  children: ProTypes.node.isRequired,
}
