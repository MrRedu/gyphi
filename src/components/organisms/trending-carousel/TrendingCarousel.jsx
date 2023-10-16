import { useEffect, useRef } from "react";
import { useTrending } from "@/hooks/useTrending";
import styles from "./TrendingCarousel.module.css";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { rightChevron } from "@/libs/lucide";

const TrendingCarousel = () => {
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
        <div className={styles["header"]}>
          <a href="#" className={styles["title-link"]}>
            <img src="/svg/trending.svg" alt="" />
            <h2 className={styles["title"]}>Trending</h2>
          </a>
          <a href="" className={styles["all-the-gifs-link"]}>
            <p className={styles["all-the-gifs-text"]}>All the GIFs</p>
            <ChevronRight
              size={rightChevron.size}
              strokeWidth={rightChevron.strokeWidth}
            />
          </a>
        </div>

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
            {loading && <h2>Loading...</h2>}
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

export default TrendingCarousel;
