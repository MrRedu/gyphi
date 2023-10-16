import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <form action="" className={styles["form"]}>
      <div className={styles["container"]}>
        <input
          className={styles["input"]}
          type="text"
          placeholder="Search all the GIFs"
        />
        <button className={styles["button"]} type="button">
          <Search icon="search" />
        </button>
      </div>
    </form>
  );
};
