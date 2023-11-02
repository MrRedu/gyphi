import { useRef } from "react";
import { useTrending } from "@/hooks/useTrending";

import styles from "./TrendingCarousel.module.css";

import { CategoryTitle } from "@/components/molecules/category-title/CategoryTitle";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Loader } from "@/components/atoms/loader/Loader";
import { Link } from "lucide-react";
import { copyToClipboard } from "@/libs/utils";

export const TrendingCarousel = () => {
  const { trending, loading } = useTrending();

  const containerRef = useRef(null);

  const handleClickRight = () => {
    containerRef.current.scrollBy(500, 0);
  };
  const handleClickLeft = () => {
    containerRef.current.scrollBy(-500, 0);
  };

  const handleCopy = (text) => {
    copyToClipboard(text);
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
            {trending &&
              trending.map(({ id, image, title, url }) => (
                <div key={id} className={styles["trending-gif"]}>
                  <img className={styles["gif-img"]} src={image} alt={title} />
                  <button
                    className={styles["copy-btn"]}
                    onClick={() => handleCopy(url)}
                  >
                    <Link size={20} />
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
