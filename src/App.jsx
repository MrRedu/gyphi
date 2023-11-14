import { useState } from "react";

import { Route, Routes } from "react-router-dom";

import { Layout } from "./layout";

import { DetailsGif } from "@/components/organisms/details-gif/DetailsGif";
import { CategoryPage, HomePage, NotFoundPage } from "@/components/pages";

import { useLocation } from "react-router-dom";

const App = () => {
  let { pathname } = useLocation();
  const [gifsCategory, setGifsCategory] = useState(["One Piece"]);

  const addCategory = (newGifsCategory) => {
    if (gifsCategory.includes(newGifsCategory)) return;
    setGifsCategory([newGifsCategory, ...gifsCategory]);
  };

  return (
    <>
      <Layout addCategory={addCategory} pathname={pathname}>
        <Routes>
          <Route path="/" element={<HomePage gifs={gifsCategory} />} />
          <Route path="/gifs/:id" element={<DetailsGif />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
