import { Loader } from "@/components/atoms/loader/Loader";
import { getGifById } from "@/services/gifs";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./DetailsGif.module.css";

export const DetailsGif = () => {
  let { id } = useParams();

  const [gif, setGif] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    getGifById({ id }, { signal: abortController.signal }).then(setGif);

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      {gif ? (
        <section className={styles["container"]}>
          <aside className={styles["aside"]}>
            <img
              className={styles["avatar"]}
              src={gif.user.avatar}
              alt={`Avatar: ${gif.user.name}`}
            />
            <div className={styles["user-info"]}>
              <h3 className={styles["user-name"]}>
                {gif.user.name || "Anonymous"}
              </h3>
              <p>{gif.user.description || "No description"}</p>
              {gif.user.is_verified ? (
                <p>Es verificado</p>
              ) : (
                <p>No es verificado</p>
              )}
            </div>
          </aside>
          <article className={styles["gif-container"]}>
            <header className={styles["gif-header"]}>
              <h2 className={styles["gif-title"]}>{gif.title}</h2>
            </header>
            <div>
              <img src={gif.image} alt={gif.title} />
            </div>
          </article>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
};
