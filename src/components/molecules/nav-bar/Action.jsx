import ProTypes from 'prop-types'

import styles from './Action.module.css'
import { useState } from 'react'

export const Action = ({ id, icon, children }) => {
  const [isOpen, setIsOpen] = useState()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div onClick={handleClick} className={styles.action}>
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
  children: ProTypes.node.isRequired,
}
