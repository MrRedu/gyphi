import { useState } from 'react'
import styles from './Nav.module.css'
import { Menu } from 'lucide-react'

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <ul className={styles['nav-mobile']}>
        <li>
          <button onClick={handleClick}>
            {/* Cambiar este icono por algo custom con animación */}
            <Menu />
          </button>
        </li>
      </ul>
    </>
  )
}
