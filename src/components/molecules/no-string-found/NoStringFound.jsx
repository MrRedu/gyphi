import propTypes from 'prop-types'
import styles from './NoStringFound.module.css'

const PrincipalText = ({ children }) => {
  return <span className={styles['principal-text']}>{children}</span>
}
const SecondaryText = ({ children }) => {
  return <span className={styles['secondary-text']}>{children}</span>
}
export const NoStringFound = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

NoStringFound.PrincipalText = PrincipalText
NoStringFound.SecondaryText = SecondaryText

NoStringFound.propTypes = {
  children: propTypes.node.isRequired,
}
PrincipalText.propTypes = {
  children: propTypes.node.isRequired,
}
SecondaryText.propTypes = {
  children: propTypes.node.isRequired,
}
