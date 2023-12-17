import propTypes from 'prop-types'
import styles from './CategoryTitle.module.css'

import { Link } from 'react-router-dom'

const LinkComponent = ({ to, children }) => {
  return (
    <Link className={styles.link} to={to}>
      {children}
    </Link>
  )
}
const Box = ({ children }) => {
  return <div className={styles.box}>{children}</div>
}

const Title = ({ children }) => {
  return <h3 className={styles.title}>{children}</h3>
}

const SecondaryText = ({ children }) => {
  return <span className={styles['secondary-text']}>{children}</span>
}

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>
}

export const CategoryTitle = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

CategoryTitle.LinkComponent = LinkComponent
CategoryTitle.Box = Box
CategoryTitle.Title = Title
CategoryTitle.Button = Button
CategoryTitle.SecondaryText = SecondaryText

CategoryTitle.propTypes = {
  children: propTypes.node.isRequired,
}

LinkComponent.propTypes = {
  to: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
}
Box.propTypes = {
  children: propTypes.node.isRequired,
}

Title.propTypes = {
  children: propTypes.node.isRequired,
}

SecondaryText.propTypes = {
  children: propTypes.node.isRequired,
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
}
