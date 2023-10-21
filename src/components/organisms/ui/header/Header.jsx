import ProTypes from "prop-types";
import styles from "./Header.module.css";
export const Header = ({ children }) => {
  return (
    <>
      <header className={styles["header"]}>
        <h1 className={styles["title"]}>GYPHI</h1>
      </header>
      {children}
    </>
  );
};
Header.propTypes = {
  children: ProTypes.node.isRequired,
};
