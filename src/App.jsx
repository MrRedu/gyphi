import { useState } from "react";

import { Route, Routes } from "react-router-dom";

import { Layout } from "./layout";

import { DetailsGif } from "@/components/organisms/details-gif/DetailsGif";
import { HomePage } from "@/components/pages/HomePage";

const App = () => {
  const [gifsCategory, setGifsCategory] = useState(["One Piece"]);

  const addCategory = (newGifsCategory) => {
    if (gifsCategory.includes(newGifsCategory)) return;
    setGifsCategory([newGifsCategory, ...gifsCategory]);
  };

  return (
    <>
      <Layout addCategory={addCategory}>
        <Routes>
          <Route path="/" element={<HomePage gifs={gifsCategory} />} />
          <Route path="/gif/:id" element={<DetailsGif />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
