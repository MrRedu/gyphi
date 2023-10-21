import ProTypes from "prop-types";

import { useEffect } from "react";
import { useGifs } from "@/hooks/useGifs";

import styles from "./GifsGrid.module.css";

import { CategoryTitle } from "@/components/molecules/category-title/CategoryTitle";
import { Loader } from "@/components/atoms/loader/Loader";
import { copyToClipboard } from "@/libs/utils";
import { Link } from "lucide-react";

export const GifsGrid = ({ category }) => {
  const { gifs, error, loading, getGifs } = useGifs();

  useEffect(() => {
    getGifs({ query: category });
  }, []);

  const handleCopy = (text) => {
    copyToClipboard(text);
  };

  return (
    <>
      <div className={styles["container"]}>
        <CategoryTitle text={category} />

        <div className={styles["gifs-container"]}>
          {loading && <Loader />}
          {error && <p>{error}</p>}
          {gifs &&
            // gifs.slice(0, 12).map(({ url, title, id }) => {
            gifs.map(({ url, title, id, image }) => {
              return (
                <div className={styles["gif-container"]} key={id}>
                  <img className={styles["gif-img"]} src={image} alt={title} />
                  <button
                    className={styles["copy-btn"]}
                    onClick={() => handleCopy(url)}
                  >
                    <Link size={20} />
                  </button>
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
