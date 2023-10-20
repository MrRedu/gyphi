import { Layout } from "./layout";
import TrendingCarousel from "@/components/organisms/trending-carousel/TrendingCarousel";
// import { ArtistsCarousel } from "./components/organisms/artists-carousel/ArtistsCarousel";
import { useState } from "react";
import { Category } from "./components/molecules/category/Category";

const App = () => {
  const [gifsCategory, setGifsCategory] = useState([]);

  const addCategory = (newGifsCategory) => {
    if (gifsCategory.includes(newGifsCategory)) return;
    setGifsCategory([newGifsCategory, ...gifsCategory]);
  };

  return (
    <>
      <Layout addCategory={addCategory}>
        <TrendingCarousel />
        <Category gifsCategory={gifsCategory} />
      </Layout>
    </>
  );
};

export default App;
