import { useEffect, useRef } from "react";
import { useTrending } from "@/hooks/useTrending";

import styles from "./TrendingCarousel.module.css";

import { CategoryTitle } from "@/components/molecules/SearchBar/category-title/CategoryTitle";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Loader } from "@/components/atoms/loader/Loader";

export const TrendingCarousel = () => {
  const { trending, loading, error, getTrending } = useTrending();

  useEffect(() => {
    getTrending();
  }, []);

  const containerRef = useRef(null);

  const handleClickRight = () => {
    containerRef.current.scrollBy(500, 0);
  };
  const handleClickLeft = () => {
    containerRef.current.scrollBy(-500, 0);
  };

  return (
    <>
      <div className={styles["container"]}>
        <CategoryTitle text={"Trending"}>
          <img src="/svg/trending.svg" alt="Trending" />
        </CategoryTitle>

        <div className={styles["slider-wrapper"]}>
          <button
            className={`${styles["button-slider"]} ${styles["left"]}`}
            onClick={handleClickLeft}
          >
            <ChevronLeft color="white" />
          </button>
          <button
            className={`${styles["button-slider"]} ${styles["right"]}`}
            onClick={handleClickRight}
          >
            <ChevronRight color="white" />
          </button>

          <div className={styles["gifs-container"]} ref={containerRef}>
            {loading && <Loader />}
            {error && <h2>Error: {error}</h2>}

            {trending &&
              trending.map(({ id, url, title }) => (
                <div key={id} className={styles["trending-gif"]}>
                  <img className={styles["gif-img"]} src={url} alt={title} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
