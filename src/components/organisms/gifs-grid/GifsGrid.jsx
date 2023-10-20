import ProTypes from "prop-types";

import { CategoryTitle } from "@/components/molecules/SearchBar/category-title/CategoryTitle";
import styles from "./GifsGrid.module.css";

import { useEffect } from "react";
import { useState } from "react";
import { getGifsByQuery } from "@/services/gifs";

export const GifsGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  const getGifs = async () => {
    const newGifs = await getGifsByQuery({ query: category });
    setGifs(newGifs);
  };

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <>
      <CategoryTitle text={category} />

      <div className={styles["container"]}>
        <div className={styles["gifs-container"]}>
          {gifs &&
            // gifs.slice(0, 12).map(({ url, title, id }) => {
            gifs.map(({ url, title, id }) => {
              return (
                <div className={styles["gif-container"]} key={id}>
                  <img className={styles["gif"]} src={url} alt={title} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
