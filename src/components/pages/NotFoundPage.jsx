import styles from './NotFoundPage.module.css'
import { Button } from '@/components/molecules/button/Button'
import { useNavigate } from 'react-router-dom'
import { MoveLeft } from 'lucide-react'

export const NotFoundPage = () => {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

  const goBack = () => {
    navigate(-1)
  }

  return (
    <>
      <section className={styles.container}>
        <div className={styles['container-text']}>
          <span className={styles.title}>Uh-oh!</span>
          <span className={styles['status-code']}>404</span>
          <span className={styles.text}>{`Something's missing.`}</span>
          <span className={styles.text}>
            The page you looking for is not found.
          </span>
        </div>
        <div className={styles.actions}>
          <Button
            handleClick={goBack}
            preIcon={<MoveLeft size={20} strokeWidth={2} color="white" />}
            background={'var(--c-darkgray-500)'}
            color={'var(--c-whywhite-300)'}
          >
            Back
          </Button>
          <Button
            handleClick={goHome}
            background={'var(--c-darkgray-500)'}
            color={'var(--c-whywhite-300)'}
          >
            Go home
          </Button>
        </div>
      </section>
    </>
  )
}
