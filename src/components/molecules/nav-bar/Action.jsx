import ProTypes from 'prop-types'

import { useState } from 'react'
import styles from './Action.module.css'
import { Sector } from './Sector'

export const Action = ({ icon, subMenu }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.action}>
      <button onClick={handleClick} type="button">
        {icon}
      </button>
      <div
        className={`${styles['action-dropdown']} ${
          isOpen ? styles['is-open'] : styles['']
        }`}
      >
        {isOpen && subMenu && (
          <>
            {subMenu.map(({ title, routes }) => (
              <Sector key={title} title={title} routes={routes} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

Action.propTypes = {
  icon: ProTypes.node.isRequired,
  subMenu: ProTypes.arrayOf(ProTypes.object).isRequired,
}
