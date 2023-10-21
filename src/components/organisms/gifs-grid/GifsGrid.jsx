import ProTypes from "prop-types";

import { useEffect } from "react";
import { useGifs } from "@/hooks/useGifs";

import styles from "./GifsGrid.module.css";

import { CategoryTitle } from "@/components/molecules/category-title/CategoryTitle";
import { Loader } from "@/components/atoms/loader/Loader";

export const GifsGrid = ({ category }) => {
  const { gifs, error, loading, getGifs } = useGifs();

  useEffect(() => {
    getGifs({ query: category });
  }, []);

  return (
    <>
      <div className={styles["container"]}>
        <CategoryTitle text={category} />

        <div className={styles["gifs-container"]}>
          {loading && <Loader />}
          {error && <p>{error}</p>}
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

GifsGrid.propTypes = {
  category: ProTypes.string.isRequired,
};
