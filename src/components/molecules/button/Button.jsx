import propTypes from "prop-types";
import styles from "./Button.module.css";
export const Button = ({
  preIcon,
  postIcon,
  handleClick,
  width,
  background,
  color,
  children,
}) => {
  return (
    <>
      <button
        type="button"
        style={{
          background: background || "var(--c-darkgray-500)",
          color: color || "var(--c-whywhite-300)",
          width: width && width ,
        }}
        className={styles["button"]}
        onClick={handleClick}
      >
        {preIcon}
        <span className={styles["text"]}>{children}</span>
        {postIcon}
      </button>
    </>
  );
};

Button.propTypes = {
  preIcon: propTypes.node,
  postIcon: propTypes.node,
  handleClick: propTypes.func.isRequired,
  width: propTypes.string,
  background: propTypes.string,
  color: propTypes.string,
  children: propTypes.node,
};
