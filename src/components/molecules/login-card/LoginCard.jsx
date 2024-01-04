import styles from './LoginCard.module.css'

import { LoginButton } from '../login-button/LoginButton'
import { useNavigate } from 'react-router-dom'
import { X } from 'lucide-react'

export const LoginCard = () => {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

  return (
    <>
      <div className={styles.container}>
        <button
          type="button"
          onClick={goHome}
          className={styles['close-button']}
        >
          <X color="var(--c-whywhite-300)" />
        </button>
        <img src="/login.svg" alt="Sign in" />
        <LoginButton />
      </div>
    </>
  )
}
