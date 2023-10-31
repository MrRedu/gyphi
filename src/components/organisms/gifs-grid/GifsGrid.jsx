import ProTypes from "prop-types";

import { useEffect } from "react";
import { useGifs } from "@/hooks/useGifs";

import styles from "./GifsGrid.module.css";

import { CategoryTitle } from "@/components/molecules/category-title/CategoryTitle";
import { Loader } from "@/components/atoms/loader/Loader";
import { copyToClipboard } from "@/libs/utils";
import { Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const GifsGrid = ({ category }) => {
  const { gifs, loading, getGifs } = useGifs();

  useEffect(() => {
    const abortController = new AbortController();
    getGifs({ query: category }, { signal: abortController.signal });

    return () => {
      abortController.abort();
    };
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
          {gifs &&
            // gifs.slice(0, 12).map(({ url, title, id }) => {
            gifs.map(({ url, title, id, image }) => {
              return (
                <div key={id} className={styles["gif-container"]}>
                  <Link to={`/gifs/${id}`}>
                    <img
                      className={styles["gif-img"]}
                      src={image}
                      alt={title}
                    />
                  </Link>
                  <button
                    className={styles["copy-btn"]}
                    onClick={() => handleCopy(url)}
                  >
                    <LinkIcon size={20} />
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
