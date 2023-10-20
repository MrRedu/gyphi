import { CategoryTitle } from "@/components/molecules/SearchBar/category-title/CategoryTitle";
import styles from "./GifsGrid.module.css";

import gifsBySearch from "../../../mocks/gifsBySearch.json";

export const GifsGrid = () => {
  const { data: gifs } = gifsBySearch;

  return (
    <>
      <CategoryTitle text={"Gifs"}>X</CategoryTitle>

      <div className={styles["container"]}>
        <div className={styles["gifs-container"]}>
          {gifs.map((gif) => {
            return (
              <div className={styles["gif-container"]} key={gif.id}>
                <img
                  className={styles["gif"]}
                  src={gif.images.original.url}
                  alt={gif.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
