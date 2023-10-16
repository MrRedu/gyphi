import { Layout } from "./layout";
import TrendingCarousel from "@/components/organisms/trending-carousel/TrendingCarousel";
import { ArtistsCarousel } from "./components/organisms/artists-carousel/ArtistsCarousel";

const App = () => {
  return (
    <>
      <Layout>
        <TrendingCarousel />
        <ArtistsCarousel />
      </Layout>
    </>
  );
};

export default App;
