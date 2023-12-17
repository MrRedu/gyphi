import styles from './CardUser.module.css'

export const CardUser = ({ picture, name, nickname, email }) => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles['user-information']}>
          <img className={styles.picture} src={picture} alt="User picture" />
          <div className={styles.content}>
            <p className={styles.name}>{name}</p>
            <p>{nickname}</p>
            <p>{email}</p>
          </div>
        </section>
      </div>
    </>
  )
}
