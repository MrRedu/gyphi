import propTypes from 'prop-types'
import styles from './Button.module.css'
export const Button = ({
  preIcon,
  postIcon,
  handleClick,
  width = '100%',
  background = 'var(--c-darkgray-700)',
  color = 'var(--c-whywhite-300)',
  children,
}) => {
  return (
    <>
      <button
        type="button"
        style={{
          backgroundColor: `${background}`,
          color: `${color}`,
          width: `${width}`,
        }}
        className={styles.button}
        onClick={handleClick}
      >
        {preIcon}
        <span className={styles.text}>{children}</span>
        {postIcon}
      </button>
    </>
  )
}

Button.propTypes = {
  preIcon: propTypes.node,
  postIcon: propTypes.node,
  handleClick: propTypes.func.isRequired,
  width: propTypes.string,
  background: propTypes.string,
  color: propTypes.string,
  children: propTypes.node,
}
