import { Layout } from "./layout";
import TrendingCarousel from "@/components/organisms/trending-carousel/TrendingCarousel";
// import { ArtistsCarousel } from "./components/organisms/artists-carousel/ArtistsCarousel";
import { GifsGrid } from "./components/organisms/gifs-grid/GifsGrid";

const App = () => {
  return (
    <>
      <Layout>
        <TrendingCarousel />
        {/* <ArtistsCarousel /> */}
        <GifsGrid />
      </Layout>
    </>
  );
};

export default App;
