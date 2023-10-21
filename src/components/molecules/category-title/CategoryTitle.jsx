import PropTypes from "prop-types";
import styles from "./CategoryTitle.module.css";
import { rightChevron } from "@/libs/lucide";
import { ChevronRight } from "lucide-react";

export const CategoryTitle = ({ text, children }) => {
  return (
    <div className={styles["category-title"]}>
      <a href="#" className={styles["title-link"]}>
        {children}
        <h2 className={styles["title"]}>{text}</h2>
      </a>
      <a href="" className={styles["see-all-link"]}>
        <p className={styles["see-all-link"]}>All the GIFs</p>
        <ChevronRight
          size={rightChevron.size}
          strokeWidth={rightChevron.strokeWidth}
        />
      </a>
    </div>
  );
};

CategoryTitle.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};
