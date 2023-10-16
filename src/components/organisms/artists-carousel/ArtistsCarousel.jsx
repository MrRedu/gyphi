import { CategoryTitle } from "@/components/molecules/SearchBar/category-title/CategoryTitle";
import styles from "./ArtistsCarousel.module.css";

export const ArtistsCarousel = () => {
  return (
    <>
      <div className={styles["container"]}>
        <CategoryTitle text={"Artists"}>
          <img src="/svg/artists.svg" alt="Artists" />
        </CategoryTitle>
      </div>
    </>
  );
};
