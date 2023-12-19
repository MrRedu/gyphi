import styles from './LoginCard.module.css'

import { LoginButton } from '../login-button/LoginButton'

export const LoginCard = () => {
  return (
    <>
      <div className={styles.container}>
        <span>Componente: {`</LoginCard>`}</span>
        <p>Hacer algo con respecto a los estilos de este componente</p>
        <LoginButton />
      </div>
    </>
  )
}
