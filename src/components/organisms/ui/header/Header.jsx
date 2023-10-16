import { SearchBar } from "@/components/molecules/SearchBar/SearchBar";
import styles from "./Header.module.css";
export const Header = () => {
  return (
    <>
      <header className={styles["header"]}>
        <h1 className={styles["title"]}>GYPHI</h1>
      </header>
      <SearchBar />
    </>
  );
};
